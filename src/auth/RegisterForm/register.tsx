import { useState } from "react";
import { Button, Box, Typography, FormControlLabel, Checkbox, Modal, Paper, IconButton } from "@mui/material";
// import Inputs from "../../components/inputs/inputs"; // Inputs komponentini import qilish
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CloseIcon from "@mui/icons-material/Close";
import Inputs from "../../components/inputs/inputs";


function Register() {
  const navigate = useNavigate();

  // Inputlarni saqlash uchun state
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

  // Gender va ruxsat berish uchun state
  const [gender, setGender] = useState("");
  const [allowAll, setAllowAll] = useState(false);

  // Modalni ochish uchun state
  const [openModal, setOpenModal] = useState(false);

  // Xatoliklar uchun state
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");

  // Inputlarni yangilash
  const handleChange = (label: string, value: string) => {
    setValues((prev) => ({ ...prev, [label]: value }));
  };

  // Genderni yangilash
  const handleGenderChange = (value: string) => {
    setGender(value);
  };

  // Ruxsat berish (Allow All) checkboxini yangilash
  const handleAllowAllChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAllowAll(event.target.checked);
    if (event.target.checked) {
      setOpenModal(true);  // Modalni ochish
    }
  };

  // Modalni yopish
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Formani yuborish
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

  // Register buttonni disable qilish
  const isSubmitButtonDisabled = !(values.email && values.password && values.firstName && values.lastName && gender && allowAll) || !!error || !!emailError;

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="#f9f9f9">
      <Box p={4} width={500} bgcolor="white" borderRadius={4} boxShadow={3} display="flex" flexDirection="column" gap={3}>
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          Register
        </Typography>

        {/* Gender option */}
        <Box display="flex" justifyContent="center" gap={3}>
          <Button 
            variant={gender === "male" ? "contained" : "outlined"} 
            onClick={() => handleGenderChange("male")}
          >
            Male
          </Button>
          <Button 
            variant={gender === "female" ? "contained" : "outlined"} 
            onClick={() => handleGenderChange("female")}
          >
            Female
          </Button>
        </Box>

        {/* Inputlar */}
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

        {/* Ruxsat berish */}
        <FormControlLabel
          control={<Checkbox checked={allowAll} onChange={handleAllowAllChange} />}
          label="I agree to allow all"
        />

        {/* Buttons */}
        <Box display="flex" justifyContent="space-between" gap={3}>
          <Button 
            variant="outlined" 
            color="primary" 
            size="large" 
            onClick={() => navigate("/login")}
            fullWidth
          >
            Go to Login
          </Button>
          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            onClick={handleSubmit}
            fullWidth
            disabled={isSubmitButtonDisabled}  // Yuborish tugmasini disable qilish
          >
            Register
          </Button>
        </Box>
      </Box>

      {/* Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
          bgcolor="rgba(0, 0, 0, 0.5)"
        >
          {/* Paper ichida modal kontenti */}
          <Paper
            sx={{
              position: "relative", // Paperga relative pozitsiya berish
              width: 400,
              p: 4, // Padding
            }}
          >
            {/* Close Iconni yuqori o'ng burchakka joylash */}
            <Box position="absolute" top={8} right={8}>
              <IconButton onClick={handleCloseModal} color="primary">
                <CloseIcon />
              </IconButton>
            </Box>

            {/* Modalning sarlavhasi */}
            <Typography variant="h6" id="modal-title" gutterBottom>
              Terms and Conditions
            </Typography>

            {/* Modalning matni */}
            <Typography variant="body1" id="modal-description" paragraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio perferendis molestias et numquam magnam eius illum maiores voluptatem dolorum atque deserunt dicta magni tempora ut accusamus fugiat eveniet impedit aliquid mollitia saepe, voluptates dolores quasi vitae quam. Accusamus doloribus eveniet facere dolores laboriosam modi minus dolor enim. Ipsum voluptates, labore laboriosam quis esse quam at vel deleniti provident, officia fugiat asperiores laborum nesciunt minus quisquam nam libero aperiam hic nobis consectetur. Eos ea recusandae ducimus ex odit consequatur eius omnis eveniet nobis porro distinctio vero mollitia fugit quasi, placeat tenetur veritatis a consectetur culpa obcaecati quos! Atque consectetur porro enim.
            </Typography>
          </Paper>
        </Box>
      </Modal>

      <ToastContainer />
    </Box>
  );
}

export default Register;
