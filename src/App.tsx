import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from './pages/SignupPage/SignupPage';
import UserHomePage from "./pages/userHomePage/UserHomePage";

function App() {
  return (
    <>
      

      <Router>
        <Routes>
          <Route path="/homepage" element={<UserHomePage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
