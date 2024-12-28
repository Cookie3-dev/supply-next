// app/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getTotalSupply } from "@/lib/api";
import { contracts } from "@/lib/contracts";

// const MaxSupply = parseInt(process.env.MAX_SUPPLY || "1000000000");

export default async function Home() {
  // const { burntTokens, circulatingSupply, contractBalances } = await getContractData();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">COOKIE Circulating Supply Tracker</h1>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
      </Card> */}
    </div>
  );
}