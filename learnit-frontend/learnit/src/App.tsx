import { AppBar, IconButton, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import SchoolIcon from "@mui/icons-material/School";
import "./App.css";
import { Link } from "react-router-dom";

function App({ children }: { children: JSX.Element }) {
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
            <Link to="/">
              <div style={{ color: "white" }}>
                <SchoolIcon color="inherit" />
              </div>
            </Link>
          </IconButton>
          <Typography
            variant="h6"
            component={Link}
            sx={{ flexGrow: 1, color: "white", textDecoration: "none" }}
            to="/"
          >
            Learnit
          </Typography>
        </Toolbar>
      </AppBar>
      <body>{children}</body>
    </>
  );
}

export default App;
