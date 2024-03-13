import { Box } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../services/context/auth/authContext";

const InstructorHome = () => {
  const { auth } = useContext(AuthContext);
  console.log(auth);
  return <Box margin={20}>InstructorHome</Box>;
};

export default InstructorHome;
