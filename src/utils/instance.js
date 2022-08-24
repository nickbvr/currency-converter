import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://api.apilayer.com/exchangerates_data',
    headers: { apikey: 'NclmKi9tsiZKmhZBJbpr9cLbFFzVa8NA' },
});
