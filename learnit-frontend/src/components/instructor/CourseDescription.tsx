import React, { useState } from "react";
import { Box, Typography, TextField, Grid, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const CourseDescription: React.FC = () => {
  const [description, setDescription] = useState("");

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  return (
    <Box display="flex" height="100vh" width="100%" gap={2}>
      {/* Sidebar */}
      <Box width="20%" padding={2} height="100%" sx={{ bgcolor: "#1976d2" }}>
        {/* <Typography variant="h6" gutterBottom sx={{ color: "white"}}>
        Sidebar
      </Typography> */}
        <Stack spacing={2}>
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
          <Button variant="contained" color="primary" size="large">
            Save
          </Button>
        </Grid>
      </Box>
    </Box>
  );
};
export default CourseDescription;
