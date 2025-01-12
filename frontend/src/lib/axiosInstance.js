import axios from "axios";
import { BACKEND_BASE_URL } from "./constants";

const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development" ? `https://wechat-the-chat-webapp.onrender.com` : "https://wechat-the-chat-webapp.onrender.com",
  withCredentials: true,
});

export default axiosInstance;
