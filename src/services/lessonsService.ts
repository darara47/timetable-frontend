import { Lesson } from "../types/lessons.types";
import { request } from "../utils/api";

export const getLessonsBySectionId = async (
  sectionId: string
): Promise<Lesson[]> => {
  try {
    const response = await request<Lesson[]>(`/lessons/${sectionId}`, {
      method: "GET",
    });

    return response;
  } catch (error: unknown) {
    throw error;
  }
};
