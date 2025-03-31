import axios from "axios";

export const apiClient = axios.create({
    baseURL: process.env.NODE_ENV === "production"
    ? "https://food-wine.onrender.com"
    : "http://localhost:4040/api/v1",
   
    // headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${localStorage.getItem("token")}`,
    // },
})
