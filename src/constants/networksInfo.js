export const networks = {
  1: {
    name: "X1 testnet",
    rpc: 'https://testrpc.x1.tech',
    chainId: 195,
    explorer: "https://www.oklink.com/x1-test",
    color: "#627EEA",
    multicall: "0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441",
    ENSRegistry: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
    fromBlock: 16669000,
    baseCurrency: {
      decimals: 18,
      name: "OKB",
      symbol: "OKB"
    },
    wrappedToken: {
      address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      name: "Wrapped Etherer",
      symbol: "WETH"
    }
  },
}

export const chainRouter = {
  1: [
    {
      name: "Uniswap",
      FACTORY: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
      WETH: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      ROUTER: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    },
  ],
  5: [
    {
      name: "Uniswap",
      FACTORY: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
      WETH: "0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6",
      ROUTER: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    },
  ],
  56: [
    {
      name: "PancakeSwap",
      FACTORY: "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73",
      WETH: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      ROUTER: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
    },
  ],
  97: [
    {
      name: "PancakeSwap",
      FACTORY: "0x6725F303b657a9451d8BA641348b6761A6CC7a17",
      WETH: "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",
      ROUTER: "0xD99D1c33F9fC3444f8101754aBC46c52416550D1",
    },
  ],
};


export default {
  chainRouter,
  networks,
}
