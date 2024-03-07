import React from "react";
import { Link, useParams } from "react-router-dom";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";

interface Module {
  id: number;
  title: string;
  duration: string;
}

interface CourseDetails {
  title: string;
  price: string;
  description: string;
  duration: string;
  modules: Module[];
  frequentlyBoughtTogether: number[];
}

const CourseDetailPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();

  if (!id) {
    return <div>Invalid video ID</div>;
  }

  const courseDetails: Record<string, CourseDetails> = {
    // Your course details here...

    "1": {
      title: "Introduction to React",
      price: "$20.00",
      description: "Course description goes here.",
      duration: "2 hours",
      modules: [
        { id: 1, title: "Module 1", duration: "30 mins" },
        { id: 2, title: "Module 2", duration: "45 mins" },
        { id: 3, title: "Module 3", duration: "50 mins" },
        { id: 4, title: "Module 4", duration: "35 mins" },
        { id: 5, title: "Module 5", duration: "55 mins" },
      ],
      frequentlyBoughtTogether: [2, 3, 4],
    },

    "2": {
      title: "JavaScript Fundamentals",
      price: "$20.00",
      description: "Course description goes here.",
      duration: "2 hours",
      modules: [
        { id: 1, title: "Module 1", duration: "30 mins" },
        { id: 2, title: "Module 2", duration: "45 mins" },
        { id: 3, title: "Module 3", duration: "50 mins" },
        { id: 4, title: "Module 4", duration: "35 mins" },
        { id: 5, title: "Module 5", duration: "55 mins" },
      ],
      frequentlyBoughtTogether: [2, 3, 4],
    },
    "3": {
      title: "CSS Styling Techniques",
      price: "$20.00",
      description: "Course description goes here.",
      duration: "2 hours",
      modules: [
        { id: 1, title: "Module 1", duration: "30 mins" },
        { id: 2, title: "Module 2", duration: "45 mins" },
        { id: 3, title: "Module 3", duration: "50 mins" },
        { id: 4, title: "Module 4", duration: "35 mins" },
        { id: 5, title: "Module 5", duration: "55 mins" },
      ],
      frequentlyBoughtTogether: [2, 3, 4],
    },
    "4": {
      title: "Responsive Web Design",
      price: "$20.00",
      description: "Course description goes here.",
      duration: "2 hours",
      modules: [
        { id: 1, title: "Module 1", duration: "30 mins" },
        { id: 2, title: "Module 2", duration: "45 mins" },
        { id: 3, title: "Module 3", duration: "50 mins" },
        { id: 4, title: "Module 4", duration: "35 mins" },
        { id: 5, title: "Module 5", duration: "55 mins" },
      ],
      frequentlyBoughtTogether: [2, 3, 4],
    },
    "5": {
      title: "State Management in React",
      price: "$20.00",
      description: "Course description goes here.",
      duration: "2 hours",
      modules: [
        { id: 1, title: "Module 1", duration: "30 mins" },
        { id: 2, title: "Module 2", duration: "45 mins" },
        { id: 3, title: "Module 3", duration: "50 mins" },
        { id: 4, title: "Module 4", duration: "35 mins" },
        { id: 5, title: "Module 5", duration: "55 mins" },
      ],
      frequentlyBoughtTogether: [2, 3, 4],
    },
    "6": {
      title: "Building RESTful APIs",
      price: "$20.00",
      description: "Course description goes here.",
      duration: "2 hours",
      modules: [
        { id: 1, title: "Module 1", duration: "30 mins" },
        { id: 2, title: "Module 2", duration: "45 mins" },
        { id: 3, title: "Module 3", duration: "50 mins" },
        { id: 4, title: "Module 4", duration: "35 mins" },
        { id: 5, title: "Module 5", duration: "55 mins" },
      ],
      frequentlyBoughtTogether: [2, 3, 4],
    },
  };

  const videoDetails = courseDetails[id];

  if (!videoDetails) {
    return <div>Video not found</div>;
  }
  const handleAddToCart = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const {
    title,
    price,
    description,
    duration,
    modules,
    frequentlyBoughtTogether,
  } = videoDetails;

  const videoContainerStyle: React.CSSProperties = {
    background: "rgba(175, 219, 245, 0.5)",
    padding: "20px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0 120px", // Add margin to the left and right
  };
  const frevideoContainerStyle: React.CSSProperties = {
    padding: "20px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0 120px",
  };

  const titleContainerStyle: React.CSSProperties = {
    flex: 1,
    marginRight: "40px",
  };

  const orderButtonStyle: React.CSSProperties = {
    borderRadius: "5px",
    background: "#3498db",
    color: "white",
    padding: "12px",
    cursor: "pointer",
  };

  const formContainerStyle: React.CSSProperties = {
    background: "rgba(175, 219, 245, 0.2)",
    padding: "20px",
    borderRadius: "10px",
    margin: "20px 350px",
    color: "#3498db",
  };
  const textContainerStyle: React.CSSProperties = {
    maxWidth: "1100px",
    margin: "auto",
    fontSize: "15px",
    color: "#3498db",
  };
  const moduleContainerStyle: React.CSSProperties = {
    background: "white",
    color: "#3498db",
    borderRadius: "10px",
    padding: "10px",
    marginBottom: "10px",
  };
  const videoStyle: React.CSSProperties = {
    width: "300px",
    margin: "20px",
    padding: "20px",
    height: "100px",
    background: "rgba(175, 219, 245, 0.5)",
    borderRadius: "10px",
    textAlign: "center",
  };
  const videoTextContainerStyle: React.CSSProperties = {
    marginBottom: "10px",
  };
  const videoButtonStyle: React.CSSProperties = {
    margin: "10px",
    padding: "12px",
    borderRadius: "5px",
    background: "#3498db",
    color: "white",
  };
  const videos = [
    { id: 1, title: "Introduction to React", price: "$20.00" },
    { id: 2, title: "JavaScript Fundamentals", price: "$15.00" },
    { id: 3, title: "CSS Styling Techniques", price: "$12.00" },
  ];

  return (
    <>
      <div>
        <h2 style={{ textAlign: "center", color: "#3498db" }}>
          COURSE LANDING PAGE
        </h2>
        <br />
        <br />
        <div style={videoContainerStyle}>
          <div style={titleContainerStyle}>
            <h2>{title}</h2>
          </div>
          <div>
            Clock Icon
            {duration}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button style={orderButtonStyle}>ORDER NOW</button>
          </div>
        </div>
        <div>
          <br />
          <br />
          <h3 style={{ textAlign: "center", color: "#3498db" }}>
            Excepteur sint occaecat cupidatat non proident,sunt in culp qui
            offcia deserunt
          </h3>

          <p style={textContainerStyle}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quiepakis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea comepmodo consetquat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cfgillum dolore eutpe fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            inpeku culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <br />
          <br />

          <p style={textContainerStyle}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium poeyi doloremque laudantium, totam rem aperiam, eaque
            ipsa quae apsb illo inventore veritatis et quasi architecto belatae
            vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, seprid quia non numquam eius modi tempora incidunt
            ut labore et dolore magnam aliqueam quaerat voluptatem.
          </p>
        </div>
        <br />
        <br />
        <h2 style={{ textAlign: "center", color: "#3498db" }}>
          COURSE CURRICULUM
        </h2>
        <div style={formContainerStyle}>
          <p style={{ color: "#3498db" }}>
            &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;{" "}
            {modules.length} MODULES &nbsp; &nbsp; &nbsp; &nbsp;{" "}
            {duration.length} HOURS-TOTAL TIME
          </p>

          {modules.map((module: Module) => (
            <div key={module.id} style={moduleContainerStyle}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h5 style={{ flex: "1" }}>
                  Consectetur adipiscing elit as heading
                </h5>
                <p
                  style={{
                    flex: "0 0 auto",
                    marginLeft: "auto",
                    textAlign: "justify",
                  }}
                >
                  Duration: {module.duration}
                </p>
              </div>

              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam as content as content
                </p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 style={{ textAlign: "center", color: "#3498db" }}>
            Frequently Bought Together
          </h2>
          <div style={frevideoContainerStyle}>
            <Grid container spacing={2} style={{ flexWrap: "nowrap" }}>
              {videos.map((video) => (
                <Grid key={video.id} item xs={12} md={4}>
                  <Card style={videoStyle}>
                    <CardContent>
                      <div style={videoTextContainerStyle}>
                        <Typography variant="body1">{video.title}</Typography>
                        <Typography variant="body2">{video.price}</Typography>
                      </div>

                      <Link
                        to={`/course-detail/${video.id}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <Button
                          variant="contained"
                          style={videoButtonStyle}
                          onClick={handleAddToCart}
                        >
                          ADD TO CART
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
        ;
      </div>
    </>
  );
};

export default CourseDetailPage;
