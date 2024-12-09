import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./auth/RegisterForm/register";
import ChangePassword from "./auth/ChangePasswordForm/changePassword";
import Login from "./auth/LoginForm/login";
import VerifyEmail from "./auth/VerifyEmail/verfyEmail";
// import Home from "./pages/HomePage/home";
import EmployeeTable from "./pages/hodim/hodim";
import Navbar from "./Components/Navigations/navbar";
import { UserResults } from "./pages/UserResults/UserResults";
// import "toastify-js/src/toastify.css";

function App() {
  return (
    <>
      {/* <Home/> */}
      <BrowserRouter>
        <Navbar />


      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/changepass" element={<ChangePassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ververify-email" element={<VerifyEmail />} />
        <Route path="/EmployeeTable" element={<EmployeeTable />} />
         <Route path="/UserResults" element={<UserResults />} /> 
        {/* <Route path="/nav" element={<Navbar/>} /> */}

      </Routes>
    </BrowserRouter>

    </>
  );
}
export default App;
