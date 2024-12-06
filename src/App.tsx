import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./auth/RegisterForm/register";
import ChangePassword from "./auth/ChangePasswordForm/changePassword";
import Login from "./auth/LoginForm/login";
import VerifyEmail from "./auth/VerifyEmail/verfyEmail";
// import "toastify-js/src/toastify.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/changepass" element={<ChangePassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ververify-email" element={<VerifyEmail />} />

      </Routes>
    </BrowserRouter>
  );}
 export default App
