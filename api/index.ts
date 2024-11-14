import axios, { AxiosInstance, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from "axios";
import { APP_API_URL } from "@constants/index";
import { handleApiError } from "./error-handler.api";

const instance: AxiosInstance = axios.create({
  baseURL: APP_API_URL,
});

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    /**
     * Set Headers
     */
    config.headers["Accept"] = "application/json";
    config.headers["Content-Type"] = "application/json";

    // console.info("[HTTP-REQUEST]", config);

    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    // console.log("[HTTP-RESPONSE]", response.data);
    return response;
  },
  (error: AxiosError): Promise<AxiosError> => {
    if (error.response) {
      const { status } = error.response;

      // console.info("[HTTP-RESPONSE-ERROR]", error.response);

      if (status === 500) {
        console.error({
          message: "Error",
          description: "Server error occured!",
        });
      }
    }

    return Promise.reject(error);
  }
);

export { instance as httpClient, handleApiError };
