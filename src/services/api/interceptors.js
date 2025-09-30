import { globalRouter } from "@/router/globalRouter";


export function setupInterceptors(axiosInstance) {

    axiosInstance.interceptors.request.use(
        config => {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    );

    axiosInstance.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            if (error.response && error.response.status === 401) {

                //usaremos o globalRouter para navegar para o login
                globalRouter.router?.replace('/login');
            }
            return Promise.reject(error);
        }
    );


}