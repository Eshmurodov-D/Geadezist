import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchInputProps {
  onSearch: (query: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  return (
    <TextField
      className="flex-grow"
      placeholder="Ф.И.О қидириш..."
      onChange={(e) => onSearch(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

