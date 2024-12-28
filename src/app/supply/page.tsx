import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getTotalSupply, MaxSupply } from "@/lib/api";

export default async function SupplyPage() {
  // const totalSupply = await getTotalSupply();
  // const burntAmount = MaxSupply - totalSupply;
  // const circulatingSupply = totalSupply - burntAmount;

  // const formattedCirculating = Math.floor(circulatingSupply).toLocaleString();

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Supply Information</h1>
      {/* <Card>
        <CardHeader>
          <CardTitle>Circulating Supply</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl">{formattedCirculating}</p>
        </CardContent>
      </Card> */}
    </div>
  );
}