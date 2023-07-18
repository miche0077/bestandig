import {  createContext, useState } from "react";
import PropTypes from 'prop-types';

export const AppContext = createContext()

 export const AppContextProvider = ({ children }) => {
    const [titulo] = useState('soluções hidraúlicas personalizadas')
    const [subtitulo] = useState('pensadas para você')

    return(
       <AppContext.Provider value={{titulo, subtitulo}}>
        {children}
       </AppContext.Provider>
    )
};

AppContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
