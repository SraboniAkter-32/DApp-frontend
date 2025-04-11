<template>
  <SingleTransaction />
  <CreateTransaction />
  <TransactionList />
</template>

<script>
import SingleTransaction from '@/components/SingleTransaction.vue';
import CreateTransaction from '@/components/CreateTransaction.vue';
import TransactionList from '@/components/TransactionTable.vue';

export default {
  components: { SingleTransaction, CreateTransaction, TransactionList }
};
</script>
