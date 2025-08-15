import React, { createContext, useState, useContext, useEffect } from 'react';
import { storage } from '../utils/storage';
import { key } from '../utils/key';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(null);
  const [onBoardingStatus, setOnBoardingStatus] = useState(null);
  const [chooseAccountStatus, setChooseAccountStatus] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    getOnBoardingAndChooseAccountStatus();
  }, [])

  const getOnBoardingAndChooseAccountStatus = async () => {
    const accountType = await storage.getItem(key.STORAGE_KEYS.ACCOUNT_TYPE);
    console.log("accountType", accountType);
    setIsAdmin(accountType);
    const status = await storage.getItem(key.STORAGE_KEYS.ONBOARDING_STATUS);
    console.log("status", status);
    setOnBoardingStatus(status);
    const chooseAccountStatus = await storage.getItem(key.STORAGE_KEYS.CHOOSEACCOUNTS_STATUS);
    setChooseAccountStatus(chooseAccountStatus);
    console.log("chooseAccountStatus", chooseAccountStatus);
    setLoading(false);

  }

  if (loading) return null;

  return (
    <AuthContext.Provider value={{ isAdmin, setIsAdmin, setOnBoardingStatus, setChooseAccountStatus, onBoardingStatus, chooseAccountStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
