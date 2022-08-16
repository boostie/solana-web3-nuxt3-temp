<template>
  <div>
    <ClientOnly>
      <WalletMultiButton></WalletMultiButton>
    </ClientOnly>
    <NuxtWelcome />
  </div>
</template>


<script lang='ts' setup>
import { WalletMultiButton } from 'solana-wallets-vue'
</script>

<script lang='ts'>

// https://github.com/lorisleiva/solana-wallets-vue

//import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets'

/*
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom'
import { initWallet } from 'solana-wallets-vue'

const wallets = [
    new PhantomWalletAdapter()
]

initWallet({ wallets, autoConnect: true })


const U64_MAX = 2n ** 64n - 1n;
console.log(U64_MAX);
*/

</script>
