// userContext/userContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the User type
type User = {
  email: string;
  role: string;  // The user's role (admin, superadmin, user)
};

// Create the context
const UserContext = createContext<{ user: User | null; setUser: React.Dispatch<React.SetStateAction<User | null>> } | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null); // Default to no user (null)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
