import React, { useContext, useEffect, useState } from "react";
import { Card, CardContent, Typography, Avatar, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import Student from "../../model/student";
import { GetStudent } from "../../services/api/studentService";
import { AuthContext } from "../../services/context/auth/authContext";

const StudentProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [student, setStudent] = useState<Partial<Student>>({});
  const { auth } = useContext(AuthContext);
  useEffect(() => {
    try {
      const fetchStudent = async () => {
        if (!id) {
          throw new Error("id not present in the route parameter");
        }
        const student = await GetStudent(+id);
        setStudent(student);
      };
      fetchStudent();
    } catch (error) {
      alert(`${error}`);
    }
  }, [id]);

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };
  const handleEditButton = () => {
    navigate(`/student/${id}/updateprofile`);
  };

  return (
    <Card
      sx={{
        width: "100%",
        margin: "auto",
        marginTop: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <CardContent>
        <Typography variant="h4" component="div" sx={{ marginBottom: 2 }}>
          Welcome, {student.name}!
        </Typography>
        <Avatar
          alt="Profile Picture"
          src="https://example.com/path/to/profile/picture.jpg"
          sx={{ width: 100, height: 100 }}
        />
        <Typography variant="h5" component="div" sx={{ marginTop: 2 }}>
          {student.name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {student.email}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          onClick={handleEditButton}
          sx={{ marginTop: 2 }}
        >
          Edit Profile
        </Button>
        <br></br>
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogout}
          sx={{ marginTop: 2 }}
        >
          Logout
        </Button>
      </CardContent>
    </Card>
  );
};

export default StudentProfile;
