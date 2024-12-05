import React, { useState } from "react";
import { TextField, Button, InputAdornment, Box } from "@mui/material";
import { Email, Lock } from "@mui/icons-material";

type InputField = {
  label: string;
  variant?: "outlined" | "filled" | "standard";
  type?: string;
};

type CustomInputsProps = {
  inputs: InputField[];
  buttonText: string;
  onSubmit: () => void;
};

function Inputs({ inputs, buttonText, onSubmit }: CustomInputsProps) {
  const [values, setValues] = useState<Record<string, string>>(
    inputs.reduce((acc, input) => ({ ...acc, [input.label]: "" }), {})
  );

  const handleChange = (label: string, value: string) => {
    setValues((prev) => ({ ...prev, [label]: value }));
  };

  const allFieldsFilled = Object.values(values).every((value) =>
    String(value).trim() !== ""
  );

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      {inputs.map((input, index) => (
        <TextField
          key={index}
          label={input.label}
          variant={input.variant || "outlined"}
          type={input.type || "text"}
          fullWidth
          value={values[input.label] || ""}
          onChange={(e) => handleChange(input.label, e.target.value)}
          InputProps={{
            startAdornment:
              input.label === "Email" ? (
                <InputAdornment position="start">
                  <Email color="primary" />
                </InputAdornment>
              ) : input.label === "Password" ? (
                <InputAdornment position="start">
                  <Lock color="primary" />
                </InputAdornment>
              ) : null,
          }}
        />
      ))}

      <Button
        variant="contained"
        color="primary"
        disabled={!allFieldsFilled}
        onClick={onSubmit}
      >
        {buttonText}
      </Button>
    </Box>
  );
}

export default Inputs;
