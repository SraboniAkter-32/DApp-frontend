<template>
    <div v-if="transaction">
      <h2>Transaction Info</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>From ac</th>
            <th>From name</th>
            <th>From routing no</th>
            <th>To ac</th>
            <th>To name</th>
            <th>To routing no</th>
            <th>Amount</th>
            <th>Service charge</th>
            <th>Transaction status</th>
            <th>Created datetime</th>
            <th>Updated datetime</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ transaction.id }}</td>
            <td>{{ transaction.from_ac }}</td>
            <td>{{ transaction.from_ac_name }}</td>
            <td>{{ transaction.from_ac_routing_no }}</td>
            <td>{{ transaction.to_ac }}</td>
            <td>{{ transaction.to_ac_name }}</td>
            <td>{{ transaction.to_ac_routing_no }}</td>
            <td>{{ transaction.amount }}</td>
            <td>{{ transaction.service_charge}}</td>
            <td>{{ transaction.transaction_status }}</td>
            <td>{{ transaction.created_datetime }}</td>
            <td>{{ transaction.updated_datetime}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  
    <div>
      <h4>Search Transaction</h4>
      <input v-model="tranId" type="number" placeholder="Enter Transaction ID" />
      <button @click="fetchTransaction">Fetch Transaction</button>
    </div>
  </template>
  
  <script>
  import { getTransaction } from '@/services/transactionService.js';
  
  export default {
    name: 'SingleTransaction',
    data() {
      return {
        tranId: '',
        transaction: null
      };
    },
    methods: {
      async fetchTransaction() {
        if (!this.tranId) return;
        try {
          this.transaction = await getTransaction(this.tranId);
        } catch (error) {
          console.error('Transaction not found:', error);
          this.transaction = null;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  
  </style>
  