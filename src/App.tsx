/* eslint-disable react-refresh/only-export-components */
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Spinner = lazy(()=> import('./components/spinner/Spinner'))
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const SignupPage = lazy(() => import("./pages/SignupPage/SignupPage"));
const UserHomePage = lazy(() => import("./pages/userHomePage/UserHomePage"));
const OTPPage = lazy(() => import("./pages/Otp/OTPPage"));
const LandingPage = lazy(() => import("./pages/LandingPage/LandingPage"));
const PDFViewer = lazy(() => import("./components/pdf/pdf"));
const ListRecordPage = lazy(() => import("./pages/ListRecordPage/ListRecordPage"));
const MedicalReport = lazy(() => import("./pages/ReportDetailsPage/ReportDetailsPage"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Spinner/>}>
        <Routes>
          <Route path="/home" element={<UserHomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/otp" element={<OTPPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/pdf-viewer" element={<PDFViewer />} />
          <Route path="/get/records" element={<ListRecordPage />} />
          <Route path="/report/details" element={<MedicalReport />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default React.memo(App);
