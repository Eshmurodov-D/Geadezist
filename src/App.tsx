//  FONTLAR MUI
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import ChangePassword from "./auth/ChangePasswordForm/changePassword"
import Login from "./auth/LoginForm/login"
import Register from "./auth/RegisterForm/register"

function App() {
  return (
    <>
     <Login /> 
     <Register />
     <ChangePassword/>
    </>
  )
}

export default App
