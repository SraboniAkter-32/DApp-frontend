<template>
    <div class="container">
      <h4>Transaction List</h4>
  
      <div v-if="error" class="text-red-500">{{ error }}</div>
  
      <table class="transaction-list">
        <thead>
          <tr>
            <th>ID</th>
            <th>From ac</th>
            <th>To_ac</th>
            <th>Amount</th>
            <th>Transaction status</th>
            <th>Created datetime</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="transaction in transactions" :key="transaction.id">
            <td>{{ transaction.id }}</td>
            <td>{{ transaction.from_ac }}</td>
            <td>{{ transaction.to_ac }}</td>
            <td>{{ transaction.amount }}</td>
            <td>{{ transaction.transaction_status }}</td>
            <td>{{ transaction.created_datetime }}</td>
          </tr>
          <tr v-if="transactions.length === 0">
            <td colspan="5">No transactions found.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { getTransactions } from '@/services/transactionService.js';
  
  export default {
    data() {
      return { transactions: [] };
    },
    mounted() {
      getTransactions().then(data => this.transactions = data);
    }
  };
  </script>
  