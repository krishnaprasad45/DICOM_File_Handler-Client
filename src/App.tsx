import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from './pages/SignupPage/SignupPage';
import UserHomePage from "./pages/userHomePage/UserHomePage";
import OTPPage from "./pages/Otp/OTPPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import PDFViewer from "./components/pdf/pdf";
import ListRecordPage from "./pages/ListRecordPage/ListRecordPage";
import MedicalReport from "./pages/ReportDetailsPage/ReportDetailsPage";

function App() {
  return (
    <>
      <Router>
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
      </Router>
    </>
  );
}

export default App;
