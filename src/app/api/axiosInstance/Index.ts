import axios from "axios";
import { baseUrlApi } from "../endPoints";

const axiosInstance=axios.create({
    baseURL:baseUrlApi
});
export default axiosInstance