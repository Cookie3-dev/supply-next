import { db } from "./db";

export const MaxSupply = parseInt(process.env.MAX_SUPPLY || "1000000000");

export async function getTotalSupply() {
  try {
    const [bscResponse, baseResponse] = await Promise.all([
      fetch(
        `https://api.bscscan.com/api?module=stats&action=tokensupply&contractaddress=${process.env.CONTRACT_ADDRESS}&apikey=${process.env.BSC_API_KEY}`,
        {
          next: {
            revalidate: 3600, // Cache for 1 hour
            tags: ["supply"],
          },
        }
      ),
      fetch(
        `https://api.basescan.org/api?module=stats&action=tokensupply&contractaddress=${process.env.CONTRACT_ADDRESS}&apikey=${process.env.BASE_API_KEY}`,
        {
          next: {
            revalidate: 3600, // Cache for 1 hour
            tags: ["supply"],
          },
        }
      ),
    ]);

    const [bscData, baseData] = await Promise.all([
      bscResponse.json(),
      baseResponse.json(),
    ]);

    const bscTotal = BigInt(bscData.result);
    const baseTotal = BigInt(baseData.result);

    const bscTotalNumber = Number(bscTotal) / 1e18;
    const baseTotalNumber = Number(baseTotal) / 1e18;
    const totalSupply = bscTotalNumber + baseTotalNumber;

    // Calculate burned and circulating
    const burntTokens = MaxSupply - totalSupply;
    const circulatingSupply = totalSupply;

    return {
      burntTokens,
      circulatingSupply,
      bscTotal,
      baseTotal,
    };
  } catch (error) {
    console.error("Error fetching total supply:", error);
    return {
      bscTotal: BigInt(0),
      baseTotal: BigInt(0),
    };
  }
}

export async function getSupplyStats() {
  try {
    const stats = await db.stats.findFirstOrThrow();

    const totalSupply = stats.baseTotal + stats.bscTotal;

    const circulatingSupply = stats.circulatingTokens;
    const burntAmount = stats.burntTokens;

    return {
      totalSupply,
      burntAmount,
      circulatingSupply,
    };
  } catch (error) {
    console.error("Error fetching total supply:", error);
    return {
      bscTotal: BigInt(0),
      baseTotal: BigInt(0),
    };
  }
}
