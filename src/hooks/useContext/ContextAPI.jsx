// ContextAPI is a global state-manager in react it comes to handle the
// props-drilling problem. There are three main components in it -
// 1. Context    
// 2. Provider     
// 3. Consumer / useContext(to overcome the complexity of Consumer we have use useContext-Hook)


import React, { createContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const userData = {
        Name: "Suryakumar Yadav",
        Age: 32,
    }
    return (
        <AppContext.Provider value={userData}>
            {children}
        </AppContext.Provider>
    );
}

export { AppContext, AppProvider };
