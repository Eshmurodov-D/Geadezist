import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./auth/RegisterForm/register";
import ChangePassword from "./auth/ChangePasswordForm/changePassword";
import Login from "./auth/LoginForm/login";
import VerifyEmail from "./auth/VerifyEmail/verfyEmail";
// import Home from "./pages/HomePage/home";
import EmployeeTable from "./pages/hodim/hodim";

import { UserResults } from "./pages/UserResults/UserResults";
import { Dashboard } from "./Components/Dashboard/Dashboard";
import UserPage from "./pages/UserPage/UserPage";
<<<<<<< HEAD
import NotFoundPage from "./pages/notFound/notFound";
=======


>>>>>>> a890c61771f0804bd5db29796ecb76ae78b82418
// import "toastify-js/src/toastify.css";
function App() {
  return (
    <>
    <BrowserRouter>
    {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/changepass" element={<ChangePassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ververify-email" element={<VerifyEmail />} />
          <Route path="/EmployeeTable" element={<EmployeeTable />} />
          <Route path="/results" element={<UserResults />} />
          <Route path="/foydalanuvchi" element={<UserPage/>} />
<<<<<<< HEAD
          <Route path="/*" element={<NotFoundPage/>}/>
=======
          <Route path="/" element={<Dashboard />} />
>>>>>>> a890c61771f0804bd5db29796ecb76ae78b82418
        </Routes>
      </BrowserRouter>
    </>
  );}
 export default App
