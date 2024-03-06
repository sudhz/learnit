import { Button, Box, Typography, Stack } from "@mui/material";

const ChooseUserType = () => {
  return (
    <Box
      margin={25}
      sx={{
        display: "flex",
        flexDirection: "column",

        alignItems: "center",
      }}
    >
      <Typography variant="h2">Continue as:</Typography>
      <Box margin={10}>
        <Stack spacing={4} direction="row">
          <Button variant="contained" size="large">
            Student
          </Button>
          <Button variant="contained" size="large">
            Instructor
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ChooseUserType;
