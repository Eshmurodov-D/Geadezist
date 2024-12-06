<<<<<<< HEAD
//  FONTLAR MUI
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import ChangePassword from "./auth/ChangePasswordForm/changePassword";
import Login from "./auth/LoginForm/login";
import Register from "./auth/RegisterForm/register";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "./Components/Navigations/navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/changePassword" element={<ChangePassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./auth/RegisterForm/register";
import ChangePassword from "./auth/ChangePasswordForm/changePassword";
import Login from "./auth/LoginForm/login";
import VerifyEmail from "./auth/VerifyEmail/verfyEmail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/changepass" element={<ChangePassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email" element={<VerifyEmail />} />

      </Routes>
    </BrowserRouter>
  );}
 export default App
>>>>>>> 1fba7f4f3ec7779c47b4adfb33b1414cbf790bcb
