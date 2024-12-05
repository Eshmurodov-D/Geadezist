import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography, Box } from "@mui/material";
import { Person, Email, Lock, Phone, LocationCity, Home } from "@mui/icons-material"; // MUI Iconlar

function Register() {
  const navigate = useNavigate();

  // Inputlar uchun state yaratish
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  
  // Xatoliklar uchun state yaratish
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");

  // Register tugmasi faolligi uchun shart
  const isRegisterButtonDisabled =
    !(firstName && lastName && email && password && confirmPassword && phone && address && city) ||
    !!error || !!emailError || password !== confirmPassword;

  // Register tugmasi bosilganda
  const handleSubmit = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError(""); // Email to'g'ri formatda bo'lsa, xatolikni tozalash
    }

    // Parol validatsiyasi
    if (password.length < 8 || password.length > 16) {
      setError("Password must be between 8 and 16 characters.");
      return;
    } else {
      setError(""); // Parol to'g'ri uzunlikda bo'lsa, xatolikni tozalash
    }

    // Parol va Confirm Passwordni tekshirish
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    } else {
      setError(""); // Parollar mos bo'lsa, xatolikni tozalash
    }

    // Agar hammasi to'g'ri bo'lsa, foydalanish
    navigate("/login"); // Successful registration (bu yerda redirect qilingan sahifa)
  };

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
        width={500}
        bgcolor="white"
        borderRadius={4}
        boxShadow={3}
        display="flex"
        flexDirection="column"
        gap={3}
      >
        {/* Sarlavha */}
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          Register
        </Typography>

        {/* Register form */}
        <Box display="flex" flexDirection="column" gap={2}>
          {/* First Name */}
          <TextField
            label="First Name"
            variant="outlined"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            InputProps={{
              endAdornment: <Person color="primary" />,
            }}
          />
          {/* Last Name */}
          <TextField
            label="Last Name"
            variant="outlined"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            InputProps={{
              endAdornment: <Person color="primary" />,
            }}
          />
          {/* Email */}
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              endAdornment: <Email color="primary" />,
            }}
            error={!!emailError}
            helperText={emailError}
          />
          {/* Password */}
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: <Lock color="primary" />,
            }}
            error={!!error}
            helperText={error}
          />
          {/* Confirm Password */}
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            InputProps={{
              endAdornment: <Lock color="primary" />,
            }}
            error={!!error}
            helperText={error}
          />
          {/* Phone */}
          <TextField
            label="Phone"
            variant="outlined"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            InputProps={{
              endAdornment: <Phone color="primary" />,
            }}
          />
          {/* Address */}
          <TextField
            label="Address"
            variant="outlined"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            InputProps={{
              endAdornment: <Home color="primary" />,
            }}
          />
          {/* City */}
          <TextField
            label="City"
            variant="outlined"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            InputProps={{
              endAdornment: <LocationCity color="primary" />,
            }}
          />
        </Box>

        {/* Register Button */}
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleSubmit}
          fullWidth
          disabled={isRegisterButtonDisabled}
        >
          Registratsiya
        </Button>

        {/* Go to Login Button */}
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => navigate("/login")}
          fullWidth
        >
          Go to Login
        </Button>
      </Box>
    </Box>
  );
}

export default Register;
