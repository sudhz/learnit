import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Login from "./components/Login";
import StudentSignup from "./components/student/StudentSignup";
import Student from "./components/student/Student";
import Instructor from "./components/instructor/Instructor";
import ChooseUserType from "./components/ChooseUserType";
import InstructorSignup from "./components/instructor/InstructorSignup";
import CourseCatalogPage from "./components/CourseCatalogPage";
import CourseDetailPage from "./components/CourseDetailPage";
import CourseDescription from "./components/instructor/CourseDescription";
import CourseBuilder from "./components/instructor/CourseBuilder";
import StudentHome from "./components/student/StudentHome";
import InstructorHome from "./components/instructor/InstructorHome";
import AuthContextProvider from "./services/context/auth/AuthContextProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import StudentProfile from "./components/student/StudentProfile";
import CourseDiscussion from "./components/CourseDiscussion";
import Video from "./components/instructor/Video";
import InstructorProfile from "./components/instructor/InstructorProfile";
import UpdateInstructorProfile from "./components/instructor/UpdateInstructorProfile";
import StudentCourses from "./components/student/StudentCourses";
import InstructorCourses from "./components/instructor/InstructorCourses";
import VideoPlayer from "./components/student/VideoPlayer";
import UpdateStudentProfile from "./components/student/UpdateStudentProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    ),
    children: [
      {
        path: "/",
        element: <ChooseUserType />,
      },
      {
        path: "student",
        element: <Student />,
      },
      {
        path: "instructor",
        element: <Instructor />,
      },
      {
        path: "student/login",
        element: <Login />,
      },
      {
        path: "student/signup",
        element: <StudentSignup />,
      },
      {
        path: "student/home",
        element: <StudentHome />,
      },
      {
        path: "instructor/signup",
        element: <InstructorSignup />,
      },
      {
        path: "instructor/login",
        element: <Login />,
      },
      {
        path: "instructor/home",
        element: <InstructorHome />,
      },
      {
        path: "courses",
        element: <CourseCatalogPage />,
      },
      {
        path: "/instructor/home/coursebuilder",
        element: (
          <ProtectedRoute>
            <CourseBuilder />
          </ProtectedRoute>
        ),
      },
      {
        path: "/instructor/home/coursebuilder/:id/video",
        element: <Video />,
      },

      {
        path: "course/:id",
        element: <CourseDetailPage />,
      },
      {
        path: "course/discussion/:id",
        element: <CourseDiscussion />,
      },
      {
        path: "course/description/:id",
        element: <CourseDescription />,
      },
      {
        path: "student/home/profile/:id",
        element: <StudentProfile />,
      },
      {
        path: "/instructor/home/myprofile/updateprofile/:id",
        element: (
          <ProtectedRoute>
            <UpdateInstructorProfile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/instructor/home/profile/:id",
        element: <InstructorProfile />,
      },
      {
        path: "/student/home/courses",
        element: <StudentCourses />,
      },
      {
        path: "/instructor/home/courses",
        element: <InstructorCourses />,
      },
      {
        path: "/video",
        element: <VideoPlayer />,
      },
      {
        path: "/student/:id/updateprofile",
        element: <UpdateStudentProfile />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
