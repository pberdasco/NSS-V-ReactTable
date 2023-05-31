import PropTypes from 'prop-types';
import React from "react";

export const Context = React.createContext();

export const TableProvider = ({children}) => {

    const [listaCasos, setListaCasos] = React.useState([]);
    const [listaCasosUpdated, setListaCasosUpdated] = React.useState({});
    const [modalIsOpen, setModalIsOpen] = React.useState(false);

// Probar con useReducer.


    return(
        <Context.Provider value={{listaCasos, setListaCasos,
                          listaCasosUpdated, setListaCasosUpdated,
                          modalIsOpen, setModalIsOpen}}>
            {children}
        </Context.Provider>
    )

}

TableProvider.propTypes = {
    children: PropTypes.element
}