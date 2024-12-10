import React from 'react';
import { IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, onPageChange }) => {
  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      <IconButton onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        <ChevronLeft />
      </IconButton>
      <div className="w-8 h-8 flex items-center justify-center border rounded-md bg-blue-50 text-blue-600">
        {currentPage}
      </div>
      <IconButton onClick={() => onPageChange(currentPage + 1)}>
        <ChevronRight />
      </IconButton>
    </div>
  );
};

