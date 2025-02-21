import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000", // Explicitly set backend URL
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
