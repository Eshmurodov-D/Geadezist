import { useState } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// TypeScript types
type VerificationCode = string[];

function VerifyEmail() {
  const [verificationCode, setVerificationCode] = useState<VerificationCode>(["", "", "", "", "", ""]);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  // Handle input change for each digit
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newCode = [...verificationCode];
      newCode[index] = value; // Set the value for the specific digit
      setVerificationCode(newCode);
      setError(""); // Clear error

      // Move to the next input field when a digit is entered
      if (index < 5 && value !== "") {
        document.getElementById(`input-${index + 1}`)?.focus();
      }
    } else {
      setError("Only numbers are allowed.");
    }
  };

  // Handle verify action
  const handleVerify = () => {
    const code = verificationCode.join("");
    if (code.length < 6) {
      toast.error("Please enter the 6-digit verification code."); // Toast error
      return;
    }

    // Verification code check (simulate backend request)
    if (code === "123456") {  // Simulating success if code is correct (you should replace this with a real API call)
      toast.success("Verification successful!");  // Toast success
      navigate("/login");  // Redirect to login if the code is correct
    } else {
      toast.error("Incorrect verification code. Please try again."); // Toast error
    }
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
        width={400}
        bgcolor="white"
        borderRadius={2}
        boxShadow={3}
        display="flex"
        flexDirection="column"
        gap={3}
      >
        <Typography variant="h5" align="center" fontWeight="bold" gutterBottom>
          Verify Your Email
        </Typography>

        <Typography variant="body2" align="center" color="textSecondary">
          Please enter the 6-digit verification code sent to your email.
        </Typography>

        <Box display="flex" justifyContent="space-between" gap={2} mb={2}>
          {verificationCode.map((value, index) => (
            <TextField
              key={index}
              id={`input-${index}`}
              label=""
              variant="outlined"
              value={value}
              onChange={(e) => handleInputChange(e, index)}  // Fixed type for onChange handler
              error={!!error}
              helperText={error && index === 5 ? error : ""}
              fullWidth
              inputProps={{ maxLength: 1 }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  width: "40px",
                  height: "56px",
                  textAlign: "center",
                },
              }}
            />
          ))}
        </Box>

        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleVerify}
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
          Verify Code
        </Button>

        <Button
          variant="outlined"
          color="primary"
          size="large"
          onClick={() => navigate("/login")}
          fullWidth
          sx={{
            borderRadius: "12px",
            padding: "10px 0",
            marginTop: 1,
            color: "#007bff",
            borderColor: "#007bff",
            "&:hover": {
              borderColor: "#0056b3",
              color: "#0056b3",
            },
          }}
        >
          Go to Login
        </Button>
      </Box>

      {/* Toast container to display notifications */}
      <ToastContainer />
    </Box>
  );
}

export default VerifyEmail;
