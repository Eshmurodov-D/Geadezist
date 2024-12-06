import React from "react";
import { TextField, InputAdornment, Box } from "@mui/material";
import { Email, Lock, Person, Phone, Home, LocationCity } from "@mui/icons-material";

type InputField = {
  label: string;
  placeholder: string;
  type?: string;
};

type CustomInputsProps = {
  inputs: InputField[];
  values: Record<string, string>;
  onChange: (label: string, value: string) => void;
  error: string;
  emailError: string;
};

const Inputs = ({ inputs, values, onChange, error, emailError }: CustomInputsProps) => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      {inputs.map((input, index) => (
        <TextField
        key={index}
        label={input.placeholder}
        type={input.type || "text"}
        value={values[input.label] || ""}
        onChange={(e) => onChange(input.label, e.target.value)}
        fullWidth
          InputProps={{
            startAdornment:
              input.label === "email" ? (
                <InputAdornment position="start">
                  <Email color="primary" />
                </InputAdornment>
              ) : input.label === "password" || input.label === "confirmPassword" ? (
                <InputAdornment position="start">
                  <Lock color="primary" />
                </InputAdornment>
              ) : input.label === "firstName" || input.label === "lastName" ? (
                <InputAdornment position="start">
                  <Person color="primary" />
                </InputAdornment>
              ) : input.label === "phone" ? (
                <InputAdornment position="start">
                  <Phone color="primary" />
                </InputAdornment>
              ) : input.label === "address" ? (
                <InputAdornment position="start">
                  <Home color="primary" />
                </InputAdornment>
              ) : input.label === "city" ? (
                <InputAdornment position="start">
                  <LocationCity color="primary" />
                </InputAdornment>
              ) : null,
          }}
          error={input.label === "email" ? !!emailError : !!error}
          helperText={input.label === "email" ? emailError : error}
        />
      ))}
    </Box>
  );
};

export default Inputs;
