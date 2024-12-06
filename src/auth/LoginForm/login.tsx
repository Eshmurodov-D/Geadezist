import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box, Typography, TextField } from "@mui/material";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  // register buttonni bossa regsiter pagega utb ketadi
  const handleRegisterNavigation = () => {
    navigate("/register");
  };

  const handleSubmit = () => {
    // emailni tekshrsh uchun funksya
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError(""); 
    }
    //loginni parolini tekshiradgan funksya
    if (password.length < 5 || password.length > 15) {
      setError("Parol 5tadan kam bolmasin va 15tadan kop bolmasin");
      return;
    } else {
      setError("");
    }

  //  logindn tugri utilsa dashboardga otvoradi
    navigate("/dashboard"); 
  };

  // inputlaga narsa kiritmasa yoki xato kiritsa button disabled tuadi

  const isLoginButtonDisabled = !(email && password) || !!error || !!emailError;

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f9f9f9"
    >
      <Box
        p={4}
        width={400}
        bgcolor="white"
        borderRadius={4}
        boxShadow={3}
        display="flex"
        flexDirection="column"
        gap={3}
      >
        {/* Sarlavha */}
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          Login
        </Typography>

        {/* Email input */}
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!emailError}
          helperText={emailError}
        />

        {/* Password input */}
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!error}
          helperText={error}
        />

        {/* Login Button */}
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleSubmit}
          fullWidth
          disabled={isLoginButtonDisabled} // Login tugmasi faolligi
        >
          Login
        </Button>

        {/* Register Button */}
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={handleRegisterNavigation}
          fullWidth
        >
          Register
        </Button>

        {/* Change Password Button */}
        <Button
          variant="text"
          color="secondary"
          onClick={() => navigate("/changepass")}
          fullWidth
        >
          Change Password
        </Button>
      </Box>
    </Box>
  );
}

export default Login;
