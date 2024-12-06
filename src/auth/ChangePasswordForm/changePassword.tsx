import { Typography, Box } from "@mui/material";
import Inputs from "../../components/inputs/inputs"; // Inputs komponentini import qilish

function ChangePassword() {
  const inputs = [
    { id: "old-password", label: "Old Password", variant: "outlined", placeholder: "Enter old password", type: "password" },
    { id: "new-password", label: "New Password", variant: "filled", placeholder: "Enter new password", type: "password" },
    { id: "confirm-password", label: "Confirm Password", variant: "standard", placeholder: "Confirm new password", type: "password" },
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
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          Change Password
        </Typography>
        <Inputs inputs={inputs} />
      </Box>
    </Box>
  );
}

export default ChangePassword;
