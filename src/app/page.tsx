import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "@/components/ui/table";
import { getSupplyStats, MaxSupply } from "@/lib/api";
import { db } from "@/lib/db";

export default async function Home() {
  const data = await getSupplyStats();

  const contractBalances = await db.contract.findMany()
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
            <p className="text-2xl">{data.burntAmount.toLocaleString()}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Circulating Supply</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl">{data.circulatingSupply.toLocaleString()}</p>
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
              {contractBalances.sort((a, b) => b.balance - a.balance).map((contract, index) => (
                <TableRow key={index}>
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