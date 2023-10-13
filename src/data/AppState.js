import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppState = () => {
    return useContext(AppContext);
};

export const AppStateProvider = ({ children }) => {
    const [cart, setCart] = useState([]); // Estado do carrinho de compras

    return (
        <AppContext.Provider value={{ cart, setCart }}>
            {children}
        </AppContext.Provider>
    );
};
