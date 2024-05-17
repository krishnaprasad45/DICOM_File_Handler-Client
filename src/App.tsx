import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from './pages/SignupPage/SignupPage';
import UserHomePage from "./pages/userHomePage/UserHomePage";
import OTPPage from "./pages/Otp/OTPPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/homepage" element={<UserHomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/otp" element={<OTPPage />} />
          <Route path="/" element={<SignupPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
