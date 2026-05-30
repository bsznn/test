// src/services/api.js
import axios from 'axios';


export const fetchProducts = () => axios.get(`${process.env.BACKEND_URL}/products`);

export const createOrder = (orderData) => {
    console.log(`appel fonction createOrder avec orderData ${JSON.stringify(orderData)}`)
    const token = localStorage.getItem('token'); // Token de connexion
    console.log(`token is ${token}`)
    return axios.post(`${process.env.BACKEND_URL}/orders`, orderData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
