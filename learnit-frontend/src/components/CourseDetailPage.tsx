import React from "react";
import { Link, useParams } from "react-router-dom";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { Button, Card, Container, Typography } from "@mui/material";
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
  const { title, duration, modules } = videoDetails;
  return (
    <>
      <div style={{ display: "flex" }}>
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              height: "100%",
              color: "white",
              boxSizing: "border-box",
              width: "15%",
              background: "rgba(52, 152, 219, 1)",
              padding: "20px",
            }}
          ></div>
        </div>
        <div
          style={{
            marginLeft: "25%",
            boxSizing: "border-box",
            padding: "20px",
          }}
        >
          <Container maxWidth="md">
            <Typography
              variant="h5"
              align="center"
              color="primary"
              style={{ color: "#3498db", fontWeight: "bold" }}
            >
              COURSE LANDING PAGE
            </Typography>
            <br />
            <br />
            <Card
              style={{
                background: "rgba(175, 219, 245, 1)",
                padding: "20px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "0 10px",
                height: "10%",
              }}
            >
              <div style={{ flex: 1, marginRight: "40px", fontWeight: "bold" }}>
                <Typography variant="h5">{title}</Typography>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <AccessTimeFilledIcon style={{ color: "#3498db" }} />
                <span style={{ marginLeft: "5px" }}>{duration}</span>
                <Link to="/Payment" style={{ marginLeft: "10px" }}>
                  <Button
                    variant="contained"
                    style={{
                      borderRadius: "5px",
                      background: "#3498db",
                      color: "white",
                      padding: "12px",
                      cursor: "pointer",
                    }}
                  >
                    ORDER NOW
                  </Button>
                </Link>
              </div>
            </Card>
            <br />
            <br />
            <div>
              <br />
              <br />
              <Typography
                variant="h5"
                align="center"
                color="primary"
                style={{ color: "#3498db", fontWeight: "bold" }}
              >
                Course Descripton
              </Typography>
              <Card
                style={{
                  background: "rgba(175, 219, 245, 1)",
                  padding: "20px",
                  borderRadius: "10px",
                  margin: "25px 50px",
                  color: "#3498db",
                }}
              >
                <Typography
                  variant="body1"
                  style={{
                    borderRadius: "20px",
                    padding: "20px",
                    marginBottom: "10px",
                    fontWeight: "bold",
                    background: "white",
                  }}
                >
                  Welcome to our comprehensive online learning platform! Our
                  courses are designed to empower you with the knowledge and
                  skills needed to succeed in today's dynamic world. Whether
                  you're a beginner or an experienced professional, our courses
                  cater to diverse skill levels and backgrounds.
                  <br />
                  <br />
                  <strong>Key Features:</strong>
                  <ul>
                    <li>
                      Expert-led instruction: Learn from industry professionals
                      and experienced educators.
                    </li>
                    <li>
                      Flexible learning: Access courses at your own pace,
                      anytime, and from anywhere.
                    </li>
                    <li>
                      Engaging content: Interactive lessons, real-world
                      projects, and assessments to reinforce learning.
                    </li>
                    <li>
                      Comprehensive curriculum: Covering essential topics and
                      the latest advancements in the field.
                    </li>
                    <li>
                      Community support: Connect with peers, share insights, and
                      collaborate on projects.
                    </li>
                  </ul>
                  <br />
                  Join us on a learning journey where you'll gain practical
                  skills, boost your confidence, and achieve your personal and
                  professional goals. Start your learning adventure today!
                </Typography>
              </Card>
            </div>
            <br />
            <br />
            <Typography
              variant="h5"
              align="center"
              color="primary"
              style={{ color: "#3498db", fontWeight: "bold" }}
            >
              Course Curriculum
            </Typography>
            <Card
              style={{
                background: "rgba(175, 219, 245, 1)",
                padding: "20px",
                borderRadius: "10px",
                margin: "25px 50px",
                color: "#3498db",
              }}
            >
              <Typography style={{ fontWeight: "bold", padding: "20px" }}>
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;{" "}
                {modules.length} MODULES &nbsp; &nbsp; &nbsp; &nbsp; {duration}{" "}
                -TOTAL TIME
              </Typography>
              {modules.map((module: Module) => (
                <Card
                  key={module.id}
                  style={{
                    background: "white",
                    borderRadius: "20px",
                    padding: "30px",
                    marginBottom: "20px",
                    color: "#3498db",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                      fontWeight: "bold",
                      marginTop: "10px",
                    }}
                  >
                    <Typography
                      variant="body1"
                      style={{ flex: "1", fontWeight: "bold" }}
                    >
                      Module {module.id}:
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{
                        flex: "0 0 auto",
                        marginLeft: "auto",
                        textAlign: "justify",
                      }}
                    >
                      Duration: {module.duration}
                    </Typography>
                  </div>
                  <div>
                    {module.id === 1 && (
                      <Typography variant="body1" style={{ color: "#3498db" }}>
                        Welcome to Module 1! In this foundational module, you'll
                        learn the core principles and essential concepts of{" "}
                        {title}. Get ready to kickstart your journey in
                        mastering {title}.
                      </Typography>
                    )}
                    {module.id === 2 && (
                      <Typography variant="body1" style={{ color: "#3498db" }}>
                        Advanced {title} Techniques. Delve deeper into {title}{" "}
                        with advanced techniques and practical examples. Enhance
                        your expertise and discover the intricacies of {title}{" "}
                        in Module 2.
                      </Typography>
                    )}
                    {module.id === 3 && (
                      <Typography variant="body1" style={{ color: "#3498db" }}>
                        {title} Applications in Real Life. Apply your knowledge
                        in real-world scenarios with Module 3. Gain hands-on
                        experience and learn how to effectively utilize {title}{" "}
                        in various practical applications.
                      </Typography>
                    )}
                    {module.id === 4 && (
                      <Typography variant="body1" style={{ color: "#3498db" }}>
                        Mastering {title} Projects. Take on advanced projects
                        and challenges in Module 4. Strengthen your skills and
                        showcase your proficiency in {title} through engaging
                        and rewarding projects.
                      </Typography>
                    )}
                    {module.id === 5 && (
                      <Typography variant="body1" style={{ color: "#3498db" }}>
                        Emerging Trends in {title}. Stay updated with the latest
                        trends and advancements in {title}. Explore cutting-edge
                        concepts and ensure you're at the forefront of {title}{" "}
                        knowledge.
                      </Typography>
                    )}
                  </div>
                </Card>
              ))}
            </Card>
          </Container>
        </div>
      </div>
    </>
  );
};
export default CourseDetailPage;
