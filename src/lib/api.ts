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

    const totalSupply = Number(bscTotal + baseTotal) / 1e18;

    return totalSupply;
  } catch (error) {
    console.error("Error fetching total supply:", error);
    return MaxSupply;
  }
}
