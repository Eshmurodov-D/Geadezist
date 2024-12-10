import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Register from "../../auth/RegisterForm/register";
import Login from "../../auth/LoginForm/login";

function LoginPage() {
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState<boolean>(false)

    const handleNavigation = () => {
        isLogin ? navigate("/register") : navigate("/login")
        setIsLogin(!isLogin); 
    };

    return (
        <div className="w-full h-screen flex">
            <div className="w-[50%] h-screen flex items-center justify-center">
                <img
                    className="w-[1000px]"
                    src="https://cdni.iconscout.com/illustration/premium/thumb/login-security-illustration-download-in-svg-png-gif-file-formats--account-secure-user-pack-files-folders-illustrations-7271013.png?f=webp"
                    alt="Illustration"
                />
            </div>

            <div className="w-[50%] h-screen flex items-center justify-center">
                {isLogin ? (
                    <div>
                        <h1 className="text-2xl">Login Page</h1>
                        <Login/>
                        <button
                            onClick={handleNavigation}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                        >
                            register
                        </button>
                    </div>
                ) : (
                    <div>
                        <h1 className="text-2xl">Register Page</h1>
                        <Register/>
                        <button
                            onClick={handleNavigation}
                            className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
                        >
                            login
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default LoginPage;
