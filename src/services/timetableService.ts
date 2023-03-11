import { request } from "../utils/api";

export const get = async (id: string): Promise<any> => {
  try {
    const response = await request<any>(`/timetable/${id}`, {
      method: "GET",
    });

    return response;
  } catch (error: unknown) {
    throw error;
  }
};
