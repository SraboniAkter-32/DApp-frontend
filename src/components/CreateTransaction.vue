<template>
    <h4>Create a transaction</h4>
    <form @submit.prevent="submitForm">
      <input v-model="form.from_ac" placeholder="from_ac" /><br/>
      <input v-model="form.from_ac_name" placeholder="from_ac_name" /><br/>
      <input v-model="form.from_ac_routing_no" placeholder="from_ac_routing_no" /><br/>
      <input v-model="form.to_ac" placeholder="to_ac" /><br/>
      <input v-model="form.to_ac_name" placeholder="to_ac_name" /><br/>
      <input v-model="form.to_ac_routing_no" placeholder="to_ac_routing_no" /><br/>
      <input v-model="form.amount" placeholder="amount" /><br/>
      <input v-model="form.service_charge" placeholder="service_charge" /><br/>
      <input v-model="form.transaction_status" placeholder="transaction_status" /><br/>
      <button type="submit">Create transaction</button>
    </form>
  </template>
  
  <script>
  import { createTransaction } from '@/services/transactionService.js';
  
  export default {
    data() {
      return {
        form: {
            from_ac: '',
            from_ac_name: '', 
            from_ac_routing_no:'', 
            to_ac:'', 
            to_ac_name:'', 
            to_ac_routing_no:'', 
            amount:'', 
            service_charge:'', 
            transaction_status:'' 
        }
      };
    },
    methods: {
      submitForm() {
        createTransaction(this.form).then(() => {
          alert('Transaction created!');
        });
      }
    }
  };
  </script>

<style scoped>

</style>
  