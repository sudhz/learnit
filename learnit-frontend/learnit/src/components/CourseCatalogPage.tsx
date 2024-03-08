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
import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Introduction to React",
    price: "$20.00",
    imgUrl:
      "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/1-How-to-Create-an-Online-Course-Thumbnail.jpg",
  },
  {
    id: 2,
    title: "JavaScript Fundamentals",
    price: "$15.00",
    imgUrl:
      "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/1-How-to-Create-an-Online-Course-Thumbnail.jpg",
  },
  {
    id: 3,
    title: "CSS Styling Techniques",
    price: "$12.00",
    imgUrl:
      "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/1-How-to-Create-an-Online-Course-Thumbnail.jpg",
  },
  {
    id: 4,
    title: "Responsive Web Design",
    price: "$18.00",
    imgUrl:
      "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/1-How-to-Create-an-Online-Course-Thumbnail.jpg",
  },
  {
    id: 5,
    title: "State Management in React",
    price: "$25.00",
    imgUrl:
      "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/1-How-to-Create-an-Online-Course-Thumbnail.jpg",
  },
  {
    id: 6,
    title: "Building RESTful APIs",
    price: "$22.00",
    imgUrl:
      "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/1-How-to-Create-an-Online-Course-Thumbnail.jpg",
  },
  {
    id: 7,
    title: "React Hooks Deep Dive",
    price: "$30.00",
    imgUrl:
      "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/1-How-to-Create-an-Online-Course-Thumbnail.jpg",
  },
  {
    id: 8,
    title: "Advanced JavaScript Patterns",
    price: "$28.00",
    imgUrl:
      "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/1-How-to-Create-an-Online-Course-Thumbnail.jpg",
  },
  {
    id: 9,
    title: "CSS Grid Layout",
    price: "$23.00",
    imgUrl:
      "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/1-How-to-Create-an-Online-Course-Thumbnail.jpg",
  },
  {
    id: 10,
    title: "Sass for Beginners",
    price: "$19.00",
    imgUrl:
      "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/1-How-to-Create-an-Online-Course-Thumbnail.jpg",
  },
  {
    id: 11,
    title: "Understanding the DOM",
    price: "$21.00",
    imgUrl:
      "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/1-How-to-Create-an-Online-Course-Thumbnail.jpg",
  },
  {
    id: 12,
    title: "React Context API",
    price: "$27.00",
    imgUrl:
      "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/1-How-to-Create-an-Online-Course-Thumbnail.jpg",
  },
  {
    id: 13,
    title: "TypeScript for JavaScript Developers",
    price: "$35.00",
    imgUrl:
      "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/1-How-to-Create-an-Online-Course-Thumbnail.jpg",
  },
  {
    id: 14,
    title: "Web Performance Optimization",
    price: "$32.00",
    imgUrl:
      "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/1-How-to-Create-an-Online-Course-Thumbnail.jpg",
  },
  {
    id: 15,
    title: "Modern CSS Layouts",
    price: "$29.00",
    imgUrl:
      "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/1-How-to-Create-an-Online-Course-Thumbnail.jpg",
  },
  {
    id: 16,
    title: "Asynchronous JavaScript",
    price: "$24.00",
    imgUrl:
      "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/1-How-to-Create-an-Online-Course-Thumbnail.jpg",
  },
  {
    id: 17,
    title: "Accessibility in Web Design",
    price: "$26.00",
    imgUrl:
      "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/1-How-to-Create-an-Online-Course-Thumbnail.jpg",
  },
  {
    id: 18,
    title: "SEO Basics for Developers",
    price: "$33.00",
    imgUrl:
      "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/1-How-to-Create-an-Online-Course-Thumbnail.jpg",
  },
  {
    id: 19,
    title: "React Native Introduction",
    price: "$38.00",
    imgUrl:
      "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/1-How-to-Create-an-Online-Course-Thumbnail.jpg",
  },
  {
    id: 20,
    title: "Vue.js Essentials",
    price: "$31.00",
    imgUrl:
      "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/1-How-to-Create-an-Online-Course-Thumbnail.jpg",
  },
  {
    id: 21,
    title: "Svelte Essentials",
    price: "$35.00",
    imgUrl:
      "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/1-How-to-Create-an-Online-Course-Thumbnail.jpg",
  },
];

const CourseCatalogPage = () => {
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
                <CardHeader title={course.title} sx={{ height: "75px" }} />
                <CardMedia
                  component="img"
                  height={194}
                  image={course.imgUrl}
                  alt={course.title}
                />
                <CardContent>
                  <Typography variant="body1" margin={1}>
                    {course.price}
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
