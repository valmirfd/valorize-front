import axios from "axios";
import { BASE_URL } from "@/services/api/config";


class BaseAuthApi {

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: BASE_URL,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
    }

    async get(url) {
        const response = await this.axiosInstance.get(url);
        return response.data;
    }

    async post(url, data) {
        const response = await this.axiosInstance.post(url, data);
        return response.data;
    }

    async put(url, data) {
        const response = await this.axiosInstance.put(url, data);
        return response.data;
    }

    async delete(url) {
        const response = await this.axiosInstance.delete(url);
        return response.data;
    }
}

export default BaseAuthApi;