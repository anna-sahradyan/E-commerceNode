import axios from "axios";

const API = axios.create({baseURL: 'http://localhost:4000'});
API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
    }
    return req;
});
export const updatedUser= (id, updatedUser) => API.patch(`/users/${id}`, updatedUser);
export const fetchUser = (id) => API.get(`/users/${id}`);
export const fetchUsers = (user) => API.get(`/users?user=${user}`);
export const getStats = (stats) => API.get(`/users/stats`,stats);
export const deleteUser = (id) => API.delete(`/users/${id}`);
export const signIn = (formData) => API.post(`/users/signin`, formData);
export const signUp = (formData) => API.post(`/users/signup`, formData);