import { request } from "../utils/api";

export const getAll = async (): Promise<any> => {
  try {
    const response = await request<any>(`/sections`, {
      method: "GET",
    });

    return response;
  } catch (error: unknown) {
    throw error;
  }
};
