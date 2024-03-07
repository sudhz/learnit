import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";

const videos = [
    { id: 1, title: "Introduction to React", price: "$20.00", imgUrl: "https://example.com/video-thumbnail.jpg" },
    { id: 2, title: "JavaScript Fundamentals", price: "$15.00", imgUrl: "https://example.com/video-thumbnail.jpg" },
    { id: 3, title: "CSS Styling Techniques", price: "$12.00", imgUrl: "https://example.com/video-thumbnail.jpg" },
    { id: 4, title: "Responsive Web Design", price: "$18.00", imgUrl: "https://example.com/video-thumbnail.jpg" },
    { id: 5, title: "State Management in React", price: "$25.00", imgUrl: "https://example.com/video-thumbnail.jpg" },
    { id: 6, title: "Building RESTful APIs", price: "$22.00", imgUrl: "https://example.com/video-thumbnail.jpg" },
    { id: 7, title: "React Hooks Deep Dive", price: "$30.00", imgUrl: "https://example.com/video-thumbnail.jpg" },
    { id: 8, title: "Advanced JavaScript Patterns", price: "$28.00", imgUrl: "https://example.com/video-thumbnail.jpg" },
    { id: 9, title: "CSS Grid Layout", price: "$23.00", imgUrl: "https://example.com/video-thumbnail.jpg" },
    { id: 10, title: "Sass for Beginners", price: "$19.00", imgUrl: "https://example.com/video-thumbnail.jpg" },
    { id: 11, title: "Understanding the DOM", price: "$21.00", imgUrl: "https://example.com/video-thumbnail.jpg" },
    { id: 12, title: "React Context API", price: "$27.00", imgUrl: "https://example.com/video-thumbnail.jpg" },
    { id: 13, title: "TypeScript for JavaScript Developers", price: "$35.00", imgUrl: "https://example.com/video-thumbnail.jpg" },
    { id: 14, title: "Web Performance Optimization", price: "$32.00", imgUrl: "https://example.com/video-thumbnail.jpg" },
    { id: 15, title: "Modern CSS Layouts", price: "$29.00", imgUrl: "https://example.com/video-thumbnail.jpg" },
    { id: 16, title: "Asynchronous JavaScript", price: "$24.00", imgUrl: "https://example.com/video-thumbnail.jpg" },
    { id: 17, title: "Accessibility in Web Design", price: "$26.00", imgUrl: "https://example.com/video-thumbnail.jpg" },
    { id: 18, title: "SEO Basics for Developers", price: "$33.00", imgUrl: "https://example.com/video-thumbnail.jpg" },
    { id: 19, title: "React Native Introduction", price: "$38.00", imgUrl: "https://example.com/video-thumbnail.jpg" },
    { id: 20, title: "Vue.js Essentials", price: "$31.00", imgUrl: "https://example.com/video-thumbnail.jpg" },
  ];  

const CourseCatalogPage = () => {
  return (
    <Stack margin={5} alignItems="center">
      <Typography variant="h2">Course Catalog</Typography>
      <Grid container margin={5} spacing={2} columns={3}>
        {videos.map((video) => (
          <Grid key={video.id} item>
            <Card>
              <CardContent>
                <div>
                  <Typography variant="body1">{video.title}</Typography>
                  <Typography variant="body2">{video.price}</Typography>
                </div>

                <Link
                  to={`/course-detail/${video.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button variant="contained">ADD TO CART</Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default CourseCatalogPage;
