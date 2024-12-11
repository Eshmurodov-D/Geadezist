import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box, Typography, TextField, Grid } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import logImage from "../../../public/Снимок экрана 2024-12-11 155812.png"; // Rasm yo‘lini moslang

type LoginType = {
  email: string;
  password: string;
  role: string;
};

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");

  const [loginData] = useState<LoginType[]>([
    { email: "admin@gmail.com", password: "admin123", role: "admin" },
    { email: "superadmin@gmail.com", password: "superadmin123", role: "superadmin" },
    { email: "user@gmail.com", password: "user123", role: "user" },
  ]);

  const handleRegisterNavigation = () => {
    navigate("/register");
  };

  const handleSubmit = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Iltimos, to'g'ri email manzilini kiriting.");
      return;
    } else {
      setEmailError("");
    }

    if (password.length < 5 || password.length > 15) {
      setError("Parol 5 tadan kam va 15 tadan ko'p bo'lmasin.");
      return;
    } else {
      setError("");
    }

    const foundUser = loginData.find(
      (user) => user.email === email && user.password === password
    );

    if (!foundUser) {
      setError("Email yoki parol noto'g'ri.");
      return;
    }

    if (foundUser.role === "admin" || foundUser.role === "superadmin") {
      navigate("/dashboard");
      toast.success("Siz muvaffaqiyatli tizimga kirdingiz!", {
        position: "top-center",
        autoClose: 2000,
      });
    } else {
      navigate("/");
    }
  };

  const isLoginButtonDisabled = !(email && password) || !!error || !!emailError;

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      sx={{
        bgcolor: "#fff", // Butun sahifaning orqa foni oq
        padding: 0,
        margin: 0,
      }}
    >
      {/* Chap tomon: Rasm yoki illyustratsiya */}
      <Grid
        item
        xs={12}
        md={6}
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          bgcolor: "#fff", // Rasmning orqa foni oq
          height: "100vh", // Butun balandlikni egallash
          padding: 0,
        }}
      >
        <Box
          component="img"
          src={logImage} // Rasm yo‘li
          alt="Login Illustration"
          sx={{
            maxWidth: "100%", // Rasmni kattaroq qilish
            height: "auto",
            objectFit: "contain", // Rasmning nisbatini saqlash
          }}
        />
      </Grid>

      {/* O‘ng tomon: Login formasi */}
      <Grid
        item
        xs={12}
        md={6}
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          bgcolor: "white", // Login formasining orqa foni oq
          height: "100vh", // Butun balandlikni egallash
          padding: 4,
        }}
      >
        <Box
          sx={{
            maxWidth: 450, // Formaning kengligini kattaroq qilish
            width: "100%",
            padding: 6, // Ichki bo‘shliqni kattaroq qilish
            borderRadius: 2,
          }}
        >
          <Typography variant="h5" align="center" fontWeight="bold" gutterBottom>
            Тизимга кириш
          </Typography>

          <TextField
            label="Електрон почта"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!emailError}
            helperText={emailError}
            margin="normal"
            sx={{ fontSize: '16px' }} // Kattaroq shrift o‘lchami
          />

          <TextField
            label="Парол"
            variant="outlined"
            fullWidth
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!error}
            helperText={error}
            margin="normal"
            sx={{ fontSize: '16px' }} // Kattaroq shrift o‘lchami
          />

          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
            fullWidth
            disabled={isLoginButtonDisabled}
            sx={{ marginTop: 3, fontSize: '16px' }} // Buton o‘lchamini kattaroq qilish
          >
            Тизимга кириш
          </Button>

          <Box display="flex" justifyContent="space-between" mt={3}>
            <Button
              variant="text"
              color="primary"
              onClick={handleRegisterNavigation}
              style={{ fontSize: '12px' }} // Kichikroq shrift
            >
              Рўйхатдан ўтиш
            </Button>
            <Button
              variant="text"
              color="secondary"
              onClick={() => navigate("/changepass")}
              style={{ fontSize: '12px' }} // Kichikroq shrift
            >
              Паролни унутдингизми?
            </Button>
          </Box>
        </Box>
      </Grid>

      <ToastContainer />
    </Grid>
  );
}

export default Login;
