import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./auth/RegisterForm/register";
import ChangePassword from "./auth/ChangePasswordForm/changePassword";
import Login from "./auth/LoginForm/login";
import VerifyEmail from "./auth/VerifyEmail/verfyEmail";
// import Home from "./pages/HomePage/home";

import { UserResults } from "./pages/UserResults/UserResults";
import { Dashboard } from "./Components/Dashboard/Dashboard";
import UserPage from "./pages/UserPage/UserPage";
import NotFoundPage from "./pages/notFound/notFound";


// import "toastify-js/src/toastify.css";
function App() {
  return (
    <>
    <BrowserRouter>
    {/* <Navbar/> */}
        <Routes>
          <Route path="/foydalanuvchi" element={<UserPage />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/changepass" element={<ChangePassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ververify-email" element={<VerifyEmail />} />
          {/* <Route path="/EmployeeTable" element={<EmployeeTableList />} /> */}
          <Route path="/results" element={<UserResults />} />
          <Route path="/foydalanuvchi" element={<UserPage/>} />
          <Route path="/*" element={<NotFoundPage/>}/>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );}
 export default App
