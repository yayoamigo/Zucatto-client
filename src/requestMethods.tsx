import axios from "axios";

const BASE_URL = "https://52.205.251.111:5000/api/";
const token = localStorage.getItem("accessToken") || "{}";
console.log("Token:", token);
const TOKEN = token

export const publicRequest = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
  });
  

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token:`Bearer ${TOKEN}`}
   
});

export const loginRequest = axios.create({
    baseURL: "https://52.205.251.111:5000/api/",
    headers: { 'Content-Type': 'application/json' },
  });


export {};
