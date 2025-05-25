// src/services/api.ts
import axios from "axios";

// Buat instance axios untuk reuse
const api = axios.create({
  baseURL: "http://localhost:5000/api", // Ganti dengan URL backend kamu
  withCredentials: true, // Penting kalau kamu pakai httpOnly cookies!
});

export default api;
