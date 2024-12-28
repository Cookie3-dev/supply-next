import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { getTotalSupply } from "@/lib/api";

export default async function TotalSupplyPage() {
  // const totalSupply = await getTotalSupply();

  // // Format all numbers consistently using the same scale
  // const formattedTotal = Math.floor(totalSupply).toLocaleString();

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Total Supply Information</h1>
      {/* <Card>
        <CardHeader>
          <CardTitle>Total Supply</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl">{formattedTotal}</p>
        </CardContent>
      </Card> */}
    </div>
  );
}