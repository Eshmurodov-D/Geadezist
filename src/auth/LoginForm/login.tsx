import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box, Typography, TextField } from "@mui/material";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleRegisterNavigation = () => {
    navigate("/register");
  };

  const handleSubmit = () => {
    // Email validatsiyasi (to'g'ri formatda bo'lishi kerak)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError(""); // Email formatini to'g'ri kiritgan bo'lsa, xatolikni tozalash
    }

    // Parol validatsiyasi (8-16 ta belgidan kam bo'lmasligi kerak)
    if (password.length < 8 || password.length > 16) {
      setError("Password must be between 8 and 16 characters.");
      return;
    } else {
      setError(""); // Parol uzunligini to'g'ri kiritgan bo'lsa, xatolikni tozalash
    }

    // Hozirgi kunda parolni to'g'riligini tekshirishni qo'shish mumkin
    // Misol uchun, sizning API'ni chaqirish

    // Agar muvaffaqiyatli kirsa
    navigate("/dashboard"); // Kirish muvaffaqiyatli bo'lsa
  };

  // Login tugmasi faolligi uchun shart
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
