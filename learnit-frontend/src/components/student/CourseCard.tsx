import { useEffect, useState } from "react";
import { GetCourse } from "../../services/api/courseService";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import Course from "../../model/course";

const CourseCard = ({ id }: { id: number }) => {
  const [course, setCourse] = useState<Course>({} as Course);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const data = await GetCourse(id);
        setCourse(data);
      } catch (error) {
        throw new Error(`${error}`);
      }
    };
    fetchCourse();
  }, [id]);

  if (!course) {
    return <>Loading...</>;
  }
// Link to=/student/course/{id}
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
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
          <Typography variant="body2" margin={1}>
            {course.cDesc}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CourseCard;
