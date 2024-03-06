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

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <ChooseUserType />
      </App>
    ),
  },
  {
    path: "/student",
    element: (
      <App>
        <Student />
      </App>
    ),
  },
  {
    path: "/instructor",
    element: (
      <App>
        <Instructor />
      </App>
    ),
  },
  {
    path: "/student/login",
    element: (
      <App>
        <Login />
      </App>
    ),
  },
  {
    path: "/student/signup",
    element: (
      <App>
        <StudentSignup />
      </App>
    ),
  },
  {
    path: "/instructor/signup",
    element: (
      <App>
        <InstructorSignup />
      </App>
    ),
  },
  {
    path: "/instructor/login",
    element: (
      <App>
        <Login />
      </App>
    ),
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
