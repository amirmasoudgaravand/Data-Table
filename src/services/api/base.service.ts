import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export class BaseService {
    constructor() {
        this.axiosInstance = Axios.create(this.axiosRequestConfig);
    }
    protected baseUrl: string = process.env.NEXT_PUBLIC_API_BASE_URL || "";
    protected axiosInstance: AxiosInstance;

    protected axiosRequestConfigDefault: AxiosRequestConfig = {
        baseURL: this.baseUrl,
        headers: { "Content-Type": "application/json" },
    };

    private _axiosRequestConfig: AxiosRequestConfig =
        this.axiosRequestConfigDefault;

    get axiosRequestConfig() {
        return this._axiosRequestConfig;
    }

    set axiosRequestConfig(config: AxiosRequestConfig) {
        if (config.headers) {
            config.headers = {
                ...this._axiosRequestConfig.headers,
                ...config.headers,
            };
        }
        this._axiosRequestConfig = { ...this._axiosRequestConfig, ...config };
    }

    protected set_axiosRequestConfig_default() {
        this._axiosRequestConfig = this.axiosRequestConfigDefault;
    }

    get axiosInstanceConfig(): AxiosInstance {
        let axiosInstance: AxiosInstance;
        this.axiosRequestConfig = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        axiosInstance = Axios.create({
            ...this.axiosRequestConfig,
        });

        // We can check Token here, if we have that
        axiosInstance.interceptors.response.use(
            function (response) {
                // Any status code that lie within the range of 2xx cause this function to trigger
                // Do something with response data
                return response;
            },
            function (error) {
                // Any status codes that falls outside the range of 2xx cause this function to trigger
                // Do something with response error
                return Promise.reject(error);
            },
        );
        return axiosInstance;
    }
}
