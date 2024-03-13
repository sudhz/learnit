import React, { useEffect, useState } from "react";
import { Box, Typography, TextField, Grid, Button, Stack } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const CourseDescription: React.FC = () => {
  const { id } = useParams();
  const [description, setDescription] = useState("");
  //const courseId=1; // Example course ID, replace with actual ID
  const [isLoading, setIsLoading] = useState(false);

  type updatedDescription = {
    UDescription: string;
  };

  useEffect(() => {
    const fetchDescription = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:5292/api/Course/${id}/description`
        );
        setDescription(response.data);
      } catch (error) {
        console.error("Error fetching course description:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDescription();
  }, [id]);

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleSave = async () => {
    setIsLoading(true);
    try {
      // Prepare the payload as a JSON object
      const payload: updatedDescription = {
        UDescription: description,
      };

      // Send the payload as JSON
      const response = await axios.put(
        `http://localhost:5292/api/course/${id}/description`,
        payload, // Send the payload as the request body
        { headers: { "Content-Type": "application/json" } }
      );

      if (!response) {
        throw new Error("Failed to update course description");
      }
      // Handle success, e.g., show a success message
      console.log("Course description updated successfully");
    } catch (error) {
      console.error("Error updating course description:", error);
      // Handle error, e.g., show an error message
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box display="flex" height="100vh" width="100%" gap={2} ml={0}>
      {/* Sidebar */}
      <Box width="20%" padding={2} height="100%" sx={{ bgcolor: "#1976d2" }}>
        <Stack spacing={2}>
          <Box
            pt={2}
            component="img"
            src="https://tipa.in/wp-content/uploads/2021/05/Online-courses.jpg"
            alt="Description of the image"
            sx={{
              width: "100%", // or any specific width value like '200px'
              height: "auto", // or any specific height value like '200px'
              objectFit: "cover", // Optional: to maintain aspect ratio
            }}
          />

          <Typography
            variant="h5"
            sx={{ color: "white", textDecoration: "none" }}
          >
            Course Name
          </Typography>
        </Stack>

        <Stack spacing={2} mt={5}>
          <Typography
            variant="h5"
            component={Link}
            sx={{ color: "white", textDecoration: "none" }}
            to=""
          >
            Back to Courses
          </Typography>
          <Typography
            variant="h5"
            component={Link}
            sx={{ color: "white", textDecoration: "none" }}
            to=""
          >
            Course Builder
          </Typography>
        </Stack>
      </Box>
      {/* Course Details and Textbox */}
      <Box width="60%" alignSelf="center" height="100%" paddingTop={10}>
        <Typography variant="h4" gutterBottom fontSize={"3rem"}>
          Course Description
        </Typography>
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          rows={15}
          value={description}
          onChange={handleDescriptionChange}
        />
        <Grid container justifyContent="flex-end" pt={2}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSave}
            disabled={isLoading}
          >
            Save
          </Button>
        </Grid>
      </Box>
    </Box>
  );
};
export default CourseDescription;
