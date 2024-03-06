import { AppBar, IconButton, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import SchoolIcon from "@mui/icons-material/School";
import "./App.css";
import ChooseUserType from "./components/ChooseUserType";

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <SchoolIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LearnIt
          </Typography>
        </Toolbar>
      </AppBar>
      <body>
        <ChooseUserType />
      </body>
    </>
  );
}

export default App;
