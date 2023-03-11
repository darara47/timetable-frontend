import axios, { RawAxiosRequestConfig, AxiosError } from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:3020/',
});

export const request = async <Response,>(
  url: string,
  options: RawAxiosRequestConfig | undefined = {},
): Promise<Response> => {
  try {
    const response = await instance<Response>({
      ...options,
      url,
    });

    return response.data;
  } catch (error: unknown) {
    error as Error | AxiosError;
    throw (error);
  }
};