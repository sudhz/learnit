import { AppBar, IconButton, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import SchoolIcon from "@mui/icons-material/School";
import "./App.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <AppBar color="primary" position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="primary"
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
              variant="h5"
              component={Link}
              sx={{ color: "white", textDecoration: "none" }}
              to="/"
            >
              Learnit
            </Typography>
          </Toolbar>
        </AppBar>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
