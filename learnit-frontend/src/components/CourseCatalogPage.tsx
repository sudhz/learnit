import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  CardMedia,
  CardHeader,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetCourses } from "../services/api/courseService";
import Course from "../model/course";

const CourseCatalogPage = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  useEffect(() => {
    const fetchCourses = async () => {
      const response = await GetCourses();
      console.log(response);
      setCourses(response);
    };
    fetchCourses();
  }, []);
  return (
    <Stack padding={5} alignItems="center">
      <Typography variant="h2">Course Catalog</Typography>
      <Grid container spacing={2} padding={5} alignItems="center">
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
            <Link
              to={`/course/${course.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card
                sx={{
                  maxWidth: 345,
                  minHeight: 400,
                  maxHeight: 450,
                  overflow: "auto",
                }}
              >
                <CardHeader title={course.name} sx={{ height: "75px" }} />
                <CardMedia
                  component="img"
                  height={194}
                  image={course.imgUrl}
                  alt={course.name}
                />
                <CardContent>
                  <Typography variant="body1" margin={1}>
                    {`$${course.price}`}
                  </Typography>

                  <Button variant="contained">Add to cart</Button>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default CourseCatalogPage;
