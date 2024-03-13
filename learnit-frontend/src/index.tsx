import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import Login from './components/Login'
import StudentSignup from './components/student/StudentSignup'
import Student from './components/student/Student'
import Instructor from './components/instructor/Instructor'
import ChooseUserType from './components/ChooseUserType'
import InstructorSignup from './components/instructor/InstructorSignup'
import CourseCatalogPage from './components/CourseCatalogPage'
import CourseDetailPage from './components/CourseDetailPage'
import CourseDescription from './components/instructor/CourseDescription'
import CourseBuilder from './components/instructor/CourseBuilder'
import StudentHome from './components/student/StudentHome'
import InstructorHome from './components/instructor/InstructorHome'
import UpdateProfile from './components/instructor/UpdateProfile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <ChooseUserType />
      },
      {
        path: 'student',
        element: <Student />
      },
      {
        path: 'instructor',
        element: <Instructor />
      },
      {
        path: 'student/login',
        element: <Login />
      },
      {
        path: 'student/signup',
        element: <StudentSignup />
      },
      {
        path: 'student/home',
        element: <StudentHome />
      },
      {
        path: 'instructor/signup',
        element: <InstructorSignup />
      },
      {
        path: 'instructor/login',
        element: <Login />
      },
      {
        path: 'instructor/home',
        element: <InstructorHome />
      },
      {
        path: 'courses',
        element: <CourseCatalogPage />
      },
      {
        path: 'coursebuilder',
        element: <CourseBuilder />
      },
      {
        path: 'course/:id',
        element: <CourseDetailPage />
      },
      {
        path: 'coursedescription',
        element: <CourseDescription />
      },
      {
        path: 'updateinstructor/:id',
        element: <UpdateProfile />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
