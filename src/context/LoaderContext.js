// context/LoaderContext.js
import React, { createContext, useContext, useState } from 'react';
import CustomLoader from '../components/CustomLoader';


const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
    const [loaderVisible, setLoaderVisible] = useState(false);

    return (
        <LoaderContext.Provider value={{ setLoaderVisible }}>
            {children}
            <CustomLoader visible={loaderVisible} />
        </LoaderContext.Provider>
    );
};

export const useLoader = () => useContext(LoaderContext);
