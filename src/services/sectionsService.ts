import { Sections } from "../types/sections.types";
import { request } from "../utils/api";

export const sectionsGetAll = async (): Promise<Sections> => {
  try {
    const response = await request<Sections>(`/sections`, {
      method: "GET",
    });
    return response;
  } catch (error: unknown) {
    throw error;
  }
};
