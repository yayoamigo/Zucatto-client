import axios from "axios";

const BASE_URL = "http://zucaLB-1301733182.us-east-1.elb.amazonaws.com/api/";
const token = localStorage.getItem("accessToken") || "{}";
const TOKEN = token

export const publicRequest = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
  });
  

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token:`Bearer ${TOKEN}`}
});


export {};
