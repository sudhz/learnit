import axios, { AxiosResponse } from "axios";
import Course from "../../model/course";

export const GetCourses = async (): Promise<Course[]> => {
  try {
    const response: AxiosResponse<Course[]> = await axios.get(
      "http://localhost:5292/api/course"
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw new Error("Unknown error");
    }
  }
};
