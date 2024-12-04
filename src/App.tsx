//  FONTLAR MUI
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import ChangePassword from "./auth/ChangePasswordForm/changePassword"
import Login from "./auth/LoginForm/login"
import Register from "./auth/RegisterForm/register"
import { Route,  Routes } from 'react-router-dom';

function App() {
  return (
    <div>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        <ChangePassword/>
        </Routes>

    </div>
  )
}

export default App
