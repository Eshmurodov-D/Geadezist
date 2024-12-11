import { useState } from "react";
import { Button, Box, Typography, FormControlLabel, Checkbox, Modal, Paper, IconButton, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CloseIcon from "@mui/icons-material/Close";
import Inputs from "../../components/inputs/inputs";
import logImage from "../../../public/Снимок экрана 2024-12-11 155812.png"; // Add your image here

function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
    city: "",
  });
  const [gender, setGender] = useState("");
  const [allowAll, setAllowAll] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleChange = (label: string, value: string) => {
    setValues((prev) => ({ ...prev, [label]: value }));
  };

  const handleGenderChange = (value: string) => {
    setGender(value);
  };

  const handleAllowAllChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAllowAll(event.target.checked);
    if (event.target.checked) {
      setOpenModal(true);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSubmit = () => {
    const trimmedEmail = values.email.trim();

    if (!trimmedEmail) {
      setEmailError("Email is required.");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(trimmedEmail)) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError("");
    }

    if (values.password.trim().toLowerCase() !== values.confirmPassword.trim().toLowerCase()) {
      setError("Passwords do not match.");
      return;
    } else {
      setError("");
    }

    toast.success("Successfully registered!", {
      position: "top-center",
      autoClose: 2000,
      onClose: () => navigate("/verify-email"),
    });
  };

  const isSubmitButtonDisabled = !(values.email && values.password && values.firstName && values.lastName && gender && allowAll) || !!error || !!emailError;

  return (
    <Grid container spacing={0} justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="white">
      {/* Left Section: Image */}
      <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center" sx={{ height: "100vh", padding: 0 }}>
        <Box
          component="img"
          src={logImage} // Add your image here
          alt="Registration Illustration"
          sx={{
            maxWidth: "100%", // Make image larger
            height: "auto",
            objectFit: "contain", // Maintain aspect ratio
          }}
        />
      </Grid>

      {/* Right Section: Registration Form */}
      <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center" sx={{ height: "100vh", padding: 4 }}>
        <Box p={6} width={500} bgcolor="white" borderRadius={4}  display="flex" flexDirection="column" gap={3}>
          <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
            Register
          </Typography>

          {/* Gender option */}
          <Box display="flex" justifyContent="center" gap={3}>
            <Button variant={gender === "male" ? "contained" : "outlined"} onClick={() => handleGenderChange("male")}>
              Male
            </Button>
            <Button variant={gender === "female" ? "contained" : "outlined"} onClick={() => handleGenderChange("female")}>
              Female
            </Button>
          </Box>

          {/* Inputs */}
          <Inputs
            inputs={[
              { label: "firstName", placeholder: "First Name" },
              { label: "lastName", placeholder: "Last Name" },
              { label: "email", placeholder: "Email", type: "email" },
              { label: "password", placeholder: "Password", type: "password" },
              { label: "confirmPassword", placeholder: "Confirm Password", type: "password" },
              { label: "phone", placeholder: "Phone" },
              { label: "address", placeholder: "Address" },
              { label: "city", placeholder: "City" },
            ]}
            values={values}
            onChange={handleChange}
            error={error}
            emailError={emailError}
          />

          {/* Allow all checkbox */}
          <FormControlLabel
            control={<Checkbox checked={allowAll} onChange={handleAllowAllChange} />}
            label="I agree to allow all"
          />

          {/* Buttons */}
          <Box display="flex" justifyContent="space-between" gap={3}>
            <Button variant="outlined" color="primary" size="large" onClick={() => navigate("/login")} fullWidth>
              Go to Login
            </Button>
            <Button variant="contained" color="primary" size="large" onClick={handleSubmit} fullWidth disabled={isSubmitButtonDisabled}>
              Register
            </Button>
          </Box>
        </Box>
      </Grid>

      {/* Modal */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh" bgcolor="rgba(0, 0, 0, 0.5)">
          <Paper sx={{ position: "relative", width: 400, p: 4 }}>
            <Box position="absolute" top={8} right={8}>
              <IconButton onClick={handleCloseModal} color="primary">
                <CloseIcon />
              </IconButton>
            </Box>
            <Typography variant="h6" gutterBottom>
              Terms and Conditions
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Paper>
        </Box>
      </Modal>

      <ToastContainer />
    </Grid>
  );
}

export default Register;
