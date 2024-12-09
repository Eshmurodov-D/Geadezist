import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./auth/RegisterForm/register";
import ChangePassword from "./auth/ChangePasswordForm/changePassword";
import Login from "./auth/LoginForm/login";
import VerifyEmail from "./auth/VerifyEmail/verfyEmail";
import Home from "./pages/HomePage/home";
import EmployeeTable from "./pages/hodim/hodim";
import Navbar from "./Components/Navigations/navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/changepass" element={<ChangePassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ververify-email" element={<VerifyEmail />} />
          <Route path="/EmployeeTable" element={<EmployeeTable />} />
          <Route path="/sidebar" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
