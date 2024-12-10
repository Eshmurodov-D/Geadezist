import React, { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
  IconButton,
  Menu,
  MenuItem
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { User } from '../../types/types';

interface UserTableProps {
  users: User[];
}

export const UserTable: React.FC<UserTableProps> = ({ users }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, user: User) => {
    setAnchorEl(event.currentTarget);
    setSelectedUser(user);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedUser(null);
  };

  return (
    <>
      <TableContainer component={Paper} className="shadow-sm">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Т/Р</TableCell>
              <TableCell>Тўлиқ исм</TableCell>
              <TableCell>Категория</TableCell>
              <TableCell>Телефон</TableCell>
              <TableCell>Қайта тест топш...</TableCell>
              <TableCell>Статус</TableCell>
              <TableCell>Ҳаракат</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.fullName}</TableCell>
                <TableCell>{user.category}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.retestStatus}</TableCell>
                <TableCell>
                  <span className="bg-yellow-100 text-yellow-800 py-1 px-2 rounded-full">
                    {user.status}
                  </span>
                </TableCell>
                <TableCell>
                  <IconButton onClick={(event) => handleMenuOpen(event, user)}>
                    <MoreVertIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Архивни кўриш</MenuItem>
        <MenuItem onClick={handleMenuClose}>Натижани кўриш</MenuItem>
        <MenuItem onClick={handleMenuClose}>Тасдиқлаш</MenuItem>
        <MenuItem onClick={handleMenuClose}>Бекор қилиш</MenuItem>
        <MenuItem onClick={handleMenuClose}>Қайта топширишга рухсат бериш</MenuItem>
      </Menu>
    </>
  );
};

