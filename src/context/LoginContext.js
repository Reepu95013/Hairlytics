// src/context/AuthContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import { storage } from '../utils/storage';
import { key } from '../utils/key';
import CustomLoader from '../components/CustomLoader';


export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [userToken, setUserToken] = useState(null);

    useEffect(() => {
        const loadToken = async () => {
            try {
                const token = await storage.getItem(key.STORAGE_KEYS.TOKEN);
                setUserToken(token);
            } catch (e) {
                console.log('Error reading token', e);
            }
            setIsLoading(false);
        };
        loadToken();
    }, []);

    const signIn = async (data) => {
        await storage.setItem(key.STORAGE_KEYS.TOKEN, data);
        setUserToken(data);
    };

    const signOut = async () => {
        await storage.removeItem(key.STORAGE_KEYS.TOKEN);
        setUserToken(null);
    };


    if (isLoading) return null;


    return (
        <LoginContext.Provider value={{ userToken, isLoading, signIn, signOut }}>
            {children}
        </LoginContext.Provider>
    );
};


export const useLogin = () => useContext(LoginContext);