<template>
  <div id="app">
    <header></header>
    <main>
      <SingleTransaction />
      <CreateTransaction />
      <TransactionList />
    </main>
  </div>
</template>

<script>

import SingleTransaction from '@/components/SingleTransaction.vue';
import CreateTransaction from '@/components/CreateTransaction.vue';
import TransactionList from '@/components/TransactionTable.vue';

export default {
  name: 'App',
  components: {
    SingleTransaction, CreateTransaction, TransactionList
  }
};
</script>

