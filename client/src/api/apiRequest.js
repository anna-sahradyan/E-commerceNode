import axios from "axios";

const BASE_URL = `http://localhost:4000`;
const TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTE0NjZiYTZhYzRmMGM0YWRlZTZiOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NjI3MDk4NCwiZXhwIjoxNjY4ODYyOTg0fQ.RdqS55Lt0iBWi6hSdzQ-WF0PfBhxxN4qv7-gi-uAhiM`;
export const publicRequest = axios.create({
    baseURL:BASE_URL,
});
export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
})