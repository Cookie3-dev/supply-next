// app/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getTotalSupply } from "@/lib/api";
import { contracts } from "@/lib/contracts";

const MaxSupply = parseInt(process.env.MAX_SUPPLY || "1000000000");

async function getContractData() {
  try {
    const totalSupply = await getTotalSupply();

    const burntTokens = MaxSupply - totalSupply;
    const circulatingSupply = MaxSupply - burntTokens;

    const contractResponses = await Promise.all(
      contracts.map(contract =>
        fetch(
          `https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=${process.env.CONTRACT_ADDRESS}&address=${contract.address}&tag=latest&apikey=${process.env.BSC_API_KEY}`,
          { next: { revalidate: 3600, tags: [contract.address] } }
        )
      )
    );

    const contractBalances = await Promise.all(
      contractResponses.map(async (response, index) => {
        try {
          const data = await response.json();
          return {
            ...contracts[index],
            balance: Number(data.result || '0') / 1e18
          };
        } catch (e) {
          console.error("Error fetching contract balance:", e);
          return {
            ...contracts[index],
            balance: 0
          };
        }
      })
    );

    return {
      totalSupply,
      burntTokens,
      circulatingSupply,
      contractBalances
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      totalSupply: MaxSupply,
      burntTokens: 0,
      circulatingSupply: MaxSupply,
      contractBalances: contracts.map(contract => ({ ...contract, balance: 0 }))
    };
  }
}
export default async function Home() {
  const { burntTokens, circulatingSupply, contractBalances } = await getContractData();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">COOKIE Circulating Supply Tracker</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Supply</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl">{MaxSupply.toLocaleString()}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Burnt COOKIE</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl">{burntTokens.toLocaleString()}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Circulating Supply</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl">{circulatingSupply.toLocaleString()}</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Contract Details</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Contract Address</TableHead>
                <TableHead>Balance (COOKIE)</TableHead>
                <TableHead>Chain</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Name</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contractBalances.map((contract) => (
                <TableRow key={contract.address}>
                  <TableCell>
                    <a
                      href={`https://bscscan.com/token/${process.env.CONTRACT_ADDRESS}?a=${contract.address}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {contract.address}
                    </a>
                  </TableCell>
                  <TableCell>{contract.balance.toLocaleString()}</TableCell>
                  <TableCell>{contract.chain}</TableCell>
                  <TableCell>{contract.type}</TableCell>
                  <TableCell>{contract.wallet}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}