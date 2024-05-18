import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "https://localhost:9090/";
const mockAPI = axios.create({ baseURL: BASE_URL });

export default mockAPI;
