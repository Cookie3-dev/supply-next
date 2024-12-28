import { getTotalSupply, MaxSupply } from "@/lib/api";
import { Contract, contracts } from "@/lib/contracts";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

async function getContractData() {
  try {
    const totalSupply = await getTotalSupply();
    const totalSupplySum =
      Number(totalSupply.bscTotal + totalSupply.baseTotal) / 1e18;
    const burntTokens = MaxSupply - totalSupplySum;
    const circulatingSupply = MaxSupply - burntTokens;

    const delay = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    const getContractBalance = async (contract: Contract) => {
      try {
        const response = await fetch(
          `https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=${process.env.CONTRACT_ADDRESS}&address=${contract.address}&tag=latest&apikey=${process.env.BSC_API_KEY}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.status !== "1" || !data.result) {
          console.error("API Error:", data);
          throw new Error("Invalid API response");
        }
        return {
          ...contract,
          balance: Number(data.result) / 1e18 || 0,
        };
      } catch (e) {
        console.error(`Error fetching balance for ${contract.address}:`, e);
        return { ...contract, balance: 0 };
      }
    };

    const contractBalances = [];
    for (let i = 0; i < contracts.length; i++) {
      const balance = await getContractBalance(contracts[i]);
      contractBalances.push(balance);

      if (i < contracts.length - 1) {
        await delay(200);
      }
    }

    return {
      totalSupply,
      burntTokens,
      circulatingSupply,
      contractBalances,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      totalSupply: { baseTotal: 0, bscTotal: 0 },
      burntTokens: 0,
      circulatingSupply: MaxSupply,
      contractBalances: contracts.map((contract) => ({
        ...contract,
        balance: 0,
      })),
    };
  }
}

export async function GET() {
  try {
    const { totalSupply, contractBalances } = await getContractData();

    await db.stats.update({
      where: {
        id: 1,
      },
      data: {
        baseTotal: totalSupply.baseTotal,
        bscTotal: totalSupply.bscTotal,
      },
    });

    await db.contract.createMany({
      data: contractBalances,
      skipDuplicates: true,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
