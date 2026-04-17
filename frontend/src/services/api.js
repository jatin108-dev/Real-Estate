import axios from "axios";

const API = axios.create({
  baseURL: "https://real-estate-txhe.onrender.com/api",
  withCredentials: true
});

export default API;