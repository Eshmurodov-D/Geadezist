import React from 'react';
import { Select, MenuItem } from '@mui/material';

interface FilterSelectProps {
  label: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}

export const FilterSelect: React.FC<FilterSelectProps> = ({ label, options, onChange }) => {
  return (
    <Select className="w-48" displayEmpty defaultValue="" onChange={(e) => onChange(e.target.value as string)}>
      <MenuItem value="" disabled>{label}</MenuItem>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
      ))}
    </Select>
  );
};

