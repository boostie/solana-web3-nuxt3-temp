import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config

import { Buffer } from "buffer";
import inject from "@rollup/plugin-inject";
const path = require('path');



export default defineNuxtConfig({
  /* RESULTS IN A DIFFERENT ERROR
  build: {
    target: 'esnext',
    transpile: [
      "@solana/buffer-layout",
      "@solana/wallet-adapter-base",
      "@solana/wallet-adapter-bitkeep",
      "@solana/wallet-adapter-bitpie",
      "@solana/wallet-adapter-blocto",
      "@solana/wallet-adapter-clover",
      "@solana/wallet-adapter-coin98",
      "@solana/wallet-adapter-coinhub",
      "@solana/wallet-adapter-ledger",
      "@solana/wallet-adapter-mathwallet",
      "@solana/wallet-adapter-phantom",
      "@solana/wallet-adapter-safepal",
      "@solana/wallet-adapter-slope",
      "@solana/wallet-adapter-solflare",
      "@solana/wallet-adapter-sollet",
      "@solana/wallet-adapter-solong",
      "@solana/wallet-adapter-torus",
      "@solana/wallet-adapter-vue",
      "@solana/wallet-adapter-vue-ui",
      "@solana/wallet-adapter-walletconnect",
      "@solana/wallet-adapter-wallets",
      "@solana/web3.js"
    ]
  },
  ssr: false
  */
})
