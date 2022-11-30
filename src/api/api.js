import axios from "axios"

const BASE_API_URL = "localhost";
const PORT_NUMBER = 3000;

const api = axios.create({
    baseURL: "http://" + BASE_API_URL + ":" + PORT_NUMBER + "/api/",
    timeout: 12000
});

export default api;