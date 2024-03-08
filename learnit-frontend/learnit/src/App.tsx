import { AppBar, IconButton, Toolbar, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import SchoolIcon from "@mui/icons-material/School";
import "./App.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Instagram, Twitter } from "@mui/icons-material";

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
      <AppBar color="primary" position="fixed" sx={{ top: 'auto', bottom: 0, padding: 1}}>
      <Toolbar>
        <Container maxWidth="sm">
          <Typography variant="body2" color="inherit" align="center"  gutterBottom >
            Contact Details: contact@learnit.com | Phone: 123-456-7890
          </Typography>
          <Typography variant="body2" color="inherit" align="center" >
            Address: Dayforce, Azure Building, Banaglore
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
    </>
  );
}

export default App;
