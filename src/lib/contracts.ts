// app/lib/contracts.ts
export interface Contract {
  id: number;
  address: string;
  chain: string;
  type: string;
  wallet: string;
}

export const contracts: Contract[] = [
  {
    id: 0,
    address: "0xe869e7b9DA52AAC17A856693b57d4cB22CB52B90",
    chain: "BNB",
    type: "TeamFinance Vesting",
    wallet: "Pre-Seed Round (ref: tokenomics)",
  },
  {
    id: 1,
    address: "0xbf2220496d9AD85F89198D88AcE3D2BF2CdAcB3f",
    chain: "BNB",
    type: "TeamFinance Vesting",
    wallet: "Seed Round (ref: tokenomics)",
  },
  {
    id: 2,
    address: "0xA98827db3Bd5F9FAD43141A48526AE110199Edd0",
    chain: "BNB",
    type: "TeamFinance Vesting",
    wallet: "Strategic Round (ref: tokenomics)",
  },
  {
    id: 3,
    address: "0x2c71243F83575fE271c2E1B0240E7bcb2243dd36",
    chain: "BNB",
    type: "TeamFinance Vesting",
    wallet: "KOLs Round (ref: tokenomics)",
  },
  {
    id: 4,
    address: "0x3D833b5a7C554ded47accBdc12E709E871F238e5",
    chain: "BNB",
    type: "TeamFinance Vesting",
    wallet: "Pre-Sale Round (ref: tokenomics)",
  },
  {
    id: 5,
    address: "0xb26e08a9040f994a89f8a15a9165a217a3bc1141",
    chain: "BNB",
    type: "TeamFinance Vesting",
    wallet: "Ecosystem Incentives Round (ref: tokenomics)",
  },
  {
    id: 6,
    address: "0x08f08790b51B622412ac11567C3933cce637EDAa",
    chain: "BNB",
    type: "TeamFinance Vesting",
    wallet: "Advisory Round (ref: tokenomics)",
  },
  {
    id: 7,
    address: "0xA880f512efbc14058Df9287915DBe0963e73b5AF",
    chain: "BNB",
    type: "TeamFinance Vesting",
    wallet: "Marketing Round (ref: tokenomics)",
  },
  {
    id: 8,
    address: "0xAD43f0A15C3A2b103a582d82da9a61A4A132429a",
    chain: "BNB",
    type: "TeamFinance Vesting",
    wallet: "Team Round (ref: tokenomics)",
  },
  {
    id: 9,
    address: "0x458eeF8f007A9193Fc4d5a277bf4b172F1Ddb992",
    chain: "BNB",
    type: "TeamFinance Vesting",
    wallet: "Treasury Round (ref: tokenomics)",
  },
  {
    id: 10,
    address: "0x40AF9DF73b731760CECe6609c60fA40aFD9810fa",
    chain: "BNB",
    type: "TeamFinance Vesting",
    wallet: "Advisory Round [ChainGPT Labs Fee] (ref: tokenomics)",
  },
  {
    id: 11,
    address: "0x6Aa5B9F75fd8f3C44d336B9753090159942187bd",
    chain: "BNB",
    type: "TeamFinance Vesting",
    wallet: "Advisory Round [ChainGPT Labs Fee] (ref: tokenomics)",
  },
  {
    id: 12,
    address: "0x1CF9E5E416d26E9aB0764C5e6eEa2412f749d3c9",
    chain: "BNB",
    type: "ChainGPT Pad Vesting",
    wallet: "Advisory Round [ChainGPT Pad Giveaway] (ref: tokenomics)",
  },
  {
    id: 13,
    address: "0x0946D75e2ae97A3D070266d58d219296005E57b4",
    chain: "BNB",
    type: "ChainGPT Pad IDO Vesting",
    wallet: "Public Round (ref: tokenomics)",
  },
  {
    id: 14,
    address: "0xb9380598B379F704E128c28011525DD8a9BaF524",
    chain: "BNB",
    type: "Polkastarter Pad IDO Vesting",
    wallet: "Public Round (ref: tokenomics)",
  },
  {
    id: 15,
    address: "0x2Ae6d20d9BA2f44c01691199C194D1fC9766db1c",
    chain: "BNB",
    type: "Airdrop Community",
    wallet: "Airdrop Round (ref: tokenomics)",
  },
  {
    id: 16,
    address: "0xbe3bCFe844bfe935c816519F998F0A57787dbAC2",
    chain: "BNB",
    type: "Airdrop Affiliate",
    wallet: "Airdrop Round (ref: tokenomics)",
  },
  {
    id: 17,
    address: "0x45242f3520cf610abffcc0e3315c4fc6080b6154",
    chain: "BNB",
    type: "Liquidity (MS)",
    wallet: "Liquidity Round (ref: tokenomics)",
  },
  {
    id: 18,
    address: "0x4589481a385A5Fa77b2003efD4Feb34E4693254f",
    chain: "BNB",
    type: "Liquidity (MS)",
    wallet: "Liquidity Round (ref: tokenomics)",
  },
];
