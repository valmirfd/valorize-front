import axios from "axios";
import { BASE_URL } from "@/services/api/config";
import { setupInterceptors } from "@/services/api/interceptors";

class BaseApi {
    constructor() {
        this.axiosInstance = axios.create({
            baseURL: BASE_URL,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        setupInterceptors(this.axiosInstance);
    }

    async get(url) {
        const response = await this.axiosInstance.get(url);
        return response.data.data;
    }

    async post(url, data) {
        const response = await this.axiosInstance.post(url, data);
        return response.data.data;
    }

    async put(url, data) {
        const response = await this.axiosInstance.put(url, data);
        return response.data.data;
    }

    async delete(url) {
        const response = await this.axiosInstance.delete(url);
        return response.data.data;
    }
}

export default BaseApi;