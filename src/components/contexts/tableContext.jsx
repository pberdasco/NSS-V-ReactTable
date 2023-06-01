import PropTypes from 'prop-types';
import React from "react";

export const Context = React.createContext();

export const TableProvider = ({children}) => {

    const [listaCasos, setListaCasos] = React.useState([]);
    const [listaCasosUpdated, setListaCasosUpdated] = React.useState({});
    const [casoActual, setCasoActual] = React.useState({})  // Caso actual (seteado al accionar un boton de cabecera)
    const [itemActual, setItemActual] = React.useState({})  // Item actual (seteado junto caso al seleccionar un boton de detalle)

    const [modalOrdenIsOpen, setModalOrdenIsOpen] = React.useState(false);
    const [modalFallaIsOpen, setModalFallaIsOpen] = React.useState(false);
    const [modalViewCasoIsOpen, setModalViewCasoIsOpen] = React.useState(false);
    const [modalViewItemIsOpen, setModalViewItemIsOpen] = React.useState(false);

    const [errorActivo, setErrorActivo] = React.useState({status: 0, message: ""})
    

// Probar con useReducer.


    return(
        <Context.Provider value={{listaCasos, setListaCasos,
                          listaCasosUpdated, setListaCasosUpdated,
                          modalOrdenIsOpen, setModalOrdenIsOpen,
                          modalFallaIsOpen, setModalFallaIsOpen,
                          modalViewCasoIsOpen, setModalViewCasoIsOpen,
                          modalViewItemIsOpen, setModalViewItemIsOpen,
                          errorActivo, setErrorActivo,
                          casoActual, setCasoActual,
                          itemActual, setItemActual}}>
            {children}
        </Context.Provider>
    )

}

TableProvider.propTypes = {
    children: PropTypes.element
}