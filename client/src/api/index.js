import axios from "axios";

const API = axios.create({baseURL: 'http://localhost:4000'});
API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
    }
    return req;
});

//!USER
export const updatedUser = (id, updatedUser) => API.patch(`/users/${id}`, updatedUser);
export const fetchUser = (id) => API.get(`/users/${id}`);
export const fetchUsers = (user) => API.get(`/users?user=${user}`);
export const getStats = (stats) => API.get(`/users/stats`, stats);
export const deleteUser = (id) => API.delete(`/users/${id}`);
export const signIn = (formData) => API.post(`/users/signin`, formData);
export const signUp = (formData) => API.post(`/users/signup`, formData);

//!PRODUCT
export const createProduct = (product) => API.post(`/products`, product);
export const deleteProduct = (id) => API.delete(`/products/${id}`);
export const addProduct = (id) => API.post(`/products/${id}`);
export const updatedProduct = (id, updatedProduct) => API.patch(`/products/${id}`, updatedProduct);
export const getAllProducts = (product) => API.get(`/products?product=${product}`);
export const getProduct = (id) => API.get(`/products/${id}`);

//!ORDERS
export const creatOrders = (orders) => API.post(`/orders`,orders);
export const deleteOrders = (id) => API.delete(`/orders/${id}`);
export const updateOrders = (id, updatedProduct) => API.patch(`/orders/${id}`, updatedProduct);
export const getAllOrders = (orders) => API.get(`/orders?order=${orders}`);
export const getUserOrders = (userId) => API.get(`/orders?order=${userId}`);
export const getUsersIncome = (income) => API.get(`/orders/income`,income);
