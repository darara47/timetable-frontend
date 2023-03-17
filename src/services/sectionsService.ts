import { Section } from "../types/sections.types";
import { request } from "../utils/api";

export const sectionsGetAll = async (): Promise<Section[]> => {
  try {
    const response = await request<Section[]>(`/sections`, {
      method: "GET",
    });
    return response;
  } catch (error: unknown) {
    throw error;
  }
};
