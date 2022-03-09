
export const ConfigNet = {
  ether : {
    chainId : 1,
    rpc     : "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
  },
  bsc : {
    chainId : 56,
    url     : "https://bsc-dataseed1.ninicoin.io"
  },
  bsc_test : {
    chainId : 97,
    url     : "https://data-seed-prebsc-1-s1.binance.org:8545/"
  },
  avalanche : {
    chainId : 43114,
    url     : "https://api.avax.network/ext/bc/C/rpc"
  },
  local : {
    chainId : 539,
    rpc     : "http://localhost:8545"
  },
  contracts : {
    camelot : "0x02E9015f98E26eD1bC7Bb51953c9C9eF2F579bAd",
    ico : "0xE2F834de86fD2D6A053C11bf19676ec8e14BAc0b"
  }
}

export const TARGET_NET = ConfigNet.avalanche