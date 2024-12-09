import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./auth/RegisterForm/register";
import ChangePassword from "./auth/ChangePasswordForm/changePassword";
import Login from "./auth/LoginForm/login";
import VerifyEmail from "./auth/VerifyEmail/verfyEmail";
import EmployeeTable from "./pages/hodim/hodim";
import { Home } from "@mui/icons-material";
import Navbar from "./Components/Navigations/navbar";
// import "toastify-js/src/toastify.css";


function App() {
  return (
    <>
    <Home/> 
        <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/changepass" element={<ChangePassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ververify-email" element={<VerifyEmail />} />
        <Route path="/EmployeeTable" element={<EmployeeTable />} />
        {/* <Route path="/nav" element={<Navbar/>} /> */}

      </Routes>
    </BrowserRouter>
    </>

  );}
 export default App
