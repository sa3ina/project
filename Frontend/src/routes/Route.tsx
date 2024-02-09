import Companies from "../pages/Companies";
import Home from "../pages/Home";
import JobsGrid from "../pages/JobsGrid";
import JobsList from "../pages/JobsList";
import Login from "../pages/Login";
import PostJob from "../pages/PostJob";
import SignUpJobSeeker from "../pages/SignUpJobSeeker";
import SignUpEmployer from "../pages/SignUpEmployer";
import Root from "../pages/Root";
import Detail from "../pages/Detail";
import SignUp from "../pages/SignUp";
import ProfileEmployer from "../pages/ProfileEmployer";
import ProfileJobSeeker from "../pages/ProfileJobSeeker";
export const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/companies",
        element: <Companies />,
      },
      {
        path: "/jobsgrid",
        element: <JobsGrid />,
      },
      {
        path: "/jobslist",
        element: <JobsList />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/postjob",
        element: <PostJob />,
      },
      {
        path: "/signupjobseeker",
        element: <SignUpJobSeeker />,
      },
      {
        path: "/signupemployer",
        element: <SignUpEmployer />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/profilemployer",
        element: <ProfileEmployer />,
      },
      {
        path: "/profilejobseeker",
        element: <ProfileJobSeeker />,
      },
      {
        path: "/:id",
        element: <Detail />,
      },
    ],
  },
];
