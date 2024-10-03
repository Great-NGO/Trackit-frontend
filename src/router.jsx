import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/admin/Dashboard";
import Login from "./pages/Login";
import AdminLogin from "./pages/admin/AdminLogin";
import ForgotPassword from "./pages/forgotPassword";
import SubmitIssueReport from "./pages/submitIssueReport";
import ResetPassword from "./pages/resetPassword";
import Error404 from "./pages/Error404";
import AdminDashboard from "./pages/admin/Dashboard";


export const router = createBrowserRouter([
    { path: "/", element: <App />},
    { path: "/dashboard", element: <Dashboard />},
    { path: "/login", element: <Login />},
    { path: "/forgot-password", element: <ForgotPassword />},
    { path: "/reset-password", element: <ResetPassword />},
    { path: "/submit-report", element: <SubmitIssueReport />},
    { path: "/admin/login", element: <AdminLogin />},
    { path: "/admin/dashboard", element: <AdminDashboard />},

    { path: "*", element: <Error404 />}


  ])
  