// services/authService.ts
import axios from 'axios';
const API_BASE = 'https://your-api-url.com/api'; // Ganti dengan URL asli kamu
export const login = async (identifier, password) => {
    const response = await axios.post(`${API_BASE}/login`, {
        identifier,
        password,
    });
    return response.data;
};
export const register = async (name, identifier, password) => {
    const response = await axios.post(`${API_BASE}/register`, { name, identifier, password });
    return response.data;
};
