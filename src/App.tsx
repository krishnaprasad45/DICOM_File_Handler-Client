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
          <Route path="/home" element={<UserHomePage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/otp" element={<OTPPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
