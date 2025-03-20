import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './Pages/Landing Page/landing';
import LoginPage from './Pages/Authentication page/LoginPage';
import SignUpPage from './Pages/Authentication page/SignUpPage';
import ForgotPasswordPage from './Pages/Authentication page/ForgotPasswordPage';
import Loader from './components/Loder/Loader';
import Error from './Pages/Error Pages/Error';
import OTPVerification from './Pages/Authentication page/OTPVerification';
import Profile from './Pages/Profile page/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="/error" element={<Error />} />
        <Route path="/otp" element={<OTPVerification />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App


