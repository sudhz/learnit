import { AppBar, Box, Container, IconButton, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import SchoolIcon from "@mui/icons-material/School";
import "./App.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <AppBar color="primary" position="fixed">
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
        <Box sx={{ padding: 5 }}>
          <Outlet />
        </Box>
      </main>
      <footer>
        <AppBar
          color="primary"
          position="static"
          sx={{ top: "auto", bottom: 0, padding: 3 }}
        >
          <Toolbar>
            <Container maxWidth="sm">
              <Typography
                variant="body2"
                color="inherit"
                align="center"
                gutterBottom
              >
                Contact Details: contact@learnit.com | Phone: 123-456-7890
              </Typography>
              <Typography variant="body2" color="inherit" align="center">
                Address: Dayforce, Azure Building, Bangalore
              </Typography>
            </Container>
          </Toolbar>
        </AppBar>
      </footer>
    </>
  );
}

export default App;
