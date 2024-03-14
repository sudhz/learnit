import React, { useContext, useState } from "react";
import { Typography, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { AuthContext } from "../../services/context/auth/authContext";

const MyProfile: React.FC = () => {
  const { auth } = useContext(AuthContext);
  // Placeholder data for instructor profile
  const [instructorProfile, setInstructorProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
  });

  return (
    <div>
      <Typography variant="h4">My Profile</Typography>

      <TextField label="Name" value={instructorProfile.name} disabled />
      <TextField label="Email" value={instructorProfile.email} disabled />
      <TextField label="Phone" value={instructorProfile.phone} disabled />

      <Button
        variant="contained"
        color="primary"
        component={Link}
        to={`/instructor/home/myprofile/updateprofile/${auth.id}`}
      >
        Edit Profile
      </Button>
    </div>
  );
};

export default MyProfile;
