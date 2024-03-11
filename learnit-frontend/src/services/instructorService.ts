import axios from "axios";
import Instructor from "../model/instructor";

export const AddInstructor = async (
  instructor: Instructor
): Promise<Instructor> => {
  try {
    const data = JSON.stringify(instructor);
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:5292/api/instructor",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    const response: Instructor = await axios.request(config);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw new Error("Unknown error");
    }
  }
};
