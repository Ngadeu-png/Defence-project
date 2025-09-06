import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

// import application layouts and pages
import App_Layout from "../routes/app_layout"
// auths imports
import Login from "../pages/auths/Login"
import Register from "../pages/auths/Register"
import LandingPage from "../pages/LandingPage";
import ForgotPassword from "../pages/auths/ForgotPassword";
import VerificationCode from "../pages/auths/VerificationCode";
import ResetPassword from "../pages/auths/ResetPassword";
import PatientDashboard from "../pages/patientdash";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App_Layout />}>
            <Route index element={<LandingPage />} />
            
            <Route path="/p" element={<App_Layout />}>
                <Route index element={<PatientDashboard/>} />
            </Route>

            <Route path="/auths">
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="forgot-password" element={<ForgotPassword />} />
                <Route path="vercode" element={<VerificationCode />} />
                <Route path="reset-password" element={<ResetPassword />} />
            </Route>

            <Route path="/patient">
            </Route>
            <Route path="/admin">
               
            </Route>
            <Route path="/doctor">
               
            </Route>
        </Route>
    )
);