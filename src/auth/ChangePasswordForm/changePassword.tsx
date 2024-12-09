import React, { useState } from "react";
// import { Box, Button, TextField, Typography } from "@mui/material";
import Inputs from "../../components/inputs/inputs"; // Assuming this is the custom Inputs component you provided
import { Box, Button, Typography } from "@mui/material";

function ChangePassword() {
  // State variables
  const [values, setValues] = useState({
    "old-password": "",
    "new-password": "",
    "confirm-password": "",
  });
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");

  // Function to handle input changes
  const handleInputChange = (label: string, value: string) => {
    setValues((prevValues) => ({
      ...prevValues,
      [label]: value,
    }));
  };

  // Password validation function
  const validatePasswords = () => {
    if (values["new-password"].length < 6) {
      setError("New password must be at least 6 characters.");
      return false;
    }

    if (values["new-password"] !== values["confirm-password"]) {
      setError("Passwords do not match.");
      return false;
    }

    // Reset the error if validation passes
    setError("");
    return true;
  };

  // Function to handle form submission
  const handleSubmit = () => {
    if (validatePasswords()) {
      console.log("Password updated successfully!");
      alert("Password updated successfully.");
      // Here you can add your API call or any other action to update the password.
    }
  };

  const inputs = [
    {
      id: "old-password",
      label: "Old Password",
      variant: "outlined",
      placeholder: "Enter old password",
      type: "password",
    },
    {
      id: "new-password",
      label: "New Password",
      variant: "filled",
      placeholder: "Enter new password",
      type: "password",
    },
    {
      id: "confirm-password",
      label: "Confirm Password",
      variant: "standard",
      placeholder: "Confirm new password",
      type: "password",
    },
  ];

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
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom >
          Change Password
        </Typography>

        {/* Rendering custom input components */}
        <Inputs
          inputs={inputs}
          values={values}
          onChange={handleInputChange}
          error={error}
          emailError={emailError} // Not using emailError here but it's passed for future extension
        />

        <Button          variant="contained"
          color="primary"
          size="large"
          onClick={handleSubmit}
          fullWidth
          sx={{
            borderRadius: "12px",
            padding: "10px 0",
            backgroundColor: "#007bff",
            "&:hover": {
              backgroundColor: "#0056b3",
            },
          }}
        >
          Update Password
        </Button>
      </Box>
    </Box>
  );
}

export default ChangePassword;
