import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  const switchToAdmin = () => setIsAdmin(true);
  const switchToUser = () => setIsAdmin(false);

  return (
    <AuthContext.Provider value={{ isAdmin, switchToAdmin, switchToUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
