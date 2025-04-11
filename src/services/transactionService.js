import axios from 'axios';


export const getTransaction = async (tranId) => {
  const response = await axios.get(`http://127.0.0.1:8000/Dashboard/transaction/${tranId}`);
  return response.data;
};

export const getTransactions = async () => {
  const res = await axios.get('http://127.0.0.1:8000/Dashboard/transactions/');
  return res.data;
};

export const createTransaction = async (transactionData) => {
  const res = await axios.post('http://127.0.0.1:8000/Dashboard/transaction/create/', transactionData);
  return res.data;
};
