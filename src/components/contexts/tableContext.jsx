import PropTypes from 'prop-types';
import React from "react";

export const Context = React.createContext();

export const TableProvider = ({children}) => {

    const [listaCasos, setListaCasos] = React.useState([]);
// Probar con useReducer.


    return(
        <Context.Provider value={{listaCasos, setListaCasos}}>
            {children}
        </Context.Provider>
    )

}

TableProvider.propTypes = {
    children: PropTypes.element
}