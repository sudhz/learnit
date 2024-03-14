import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../services/context/auth/authContext";
import { GetCoursesByStudentId } from "../../services/api/courseService";
import CourseCard from "./CourseCard";
import { Grid, Stack, Typography } from "@mui/material";

const StudentCourses = () => {
  const { auth } = useContext(AuthContext);
  const [courses, setCourses] = useState<number[]>([]);

  useEffect(() => {
    const fetchCoursesByStudentId = async () => {
      try {
        if (!auth.id) {
          throw new Error("Student not logged in");
        }

        const data = await GetCoursesByStudentId(auth.id);
        setCourses(data);
      } catch (error) {
        console.error(`Error fetching courses: ${error}`);
      }
    };
    fetchCoursesByStudentId();
  }, [auth]);

  return (
    <Stack padding={5} alignItems="center">
      <Typography variant="h5">My Courses</Typography>
      <Grid container spacing={2} padding={5} alignItems="center">
        {courses.map((courseId) => (
          <CourseCard key={courseId} id={courseId} />
        ))}
      </Grid>
    </Stack>
  );
};

export default StudentCourses;
