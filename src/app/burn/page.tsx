import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { getTotalSupply, MaxSupply } from "@/lib/api";

export default async function BurnPage() {
  const totalSupply = await getTotalSupply();
  const burntTokens = MaxSupply - totalSupply;

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Burn Information</h1>
      <Card>
        <CardHeader>
          <CardTitle>Burnt COOKIE</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl">{burntTokens.toLocaleString()}</p>
        </CardContent>
      </Card>
    </div>
  );
}