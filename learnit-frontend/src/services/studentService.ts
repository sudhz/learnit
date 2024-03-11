import axios from "axios";
import Student from "../model/student";

export const AddStudent = async (student: Student): Promise<Student> => {
  try {
    const data = JSON.stringify(student);
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:5292/api/student",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    const response: Student = await axios.request(config);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw new Error("Unknown error");
    }
  }
};
