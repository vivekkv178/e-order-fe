import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://open-api-be-vivekkv.vercel.app",
  // timeout: 5000, // Timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
    Authorization: "",
  },
});

export default axiosInstance;
