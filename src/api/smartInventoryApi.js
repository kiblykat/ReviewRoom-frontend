import axios from "axios";

const BASE_URL = "https://localhost:9090/";
const mockAPI = axios.create({ baseURL: BASE_URL });

export default mockAPI;
