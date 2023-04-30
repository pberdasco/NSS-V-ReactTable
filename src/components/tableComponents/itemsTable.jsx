import PropTypes from 'prop-types';
import ItemsRows from "./itemsRows.jsx";
//import { useState, useEffect } from "react";

export default function ItemsTable(props){

    const caso = props.caso;

    return (
        <tr className="detalle">
            <td colSpan={10}>
            <table className="detail-table grillasStd">
                <thead>
                    <tr className="titulos-detalle">
                        <th data-name="Producto">Det</th>
                        <th data-name="Color">Caso</th>
                        <th data-name="Factura">Alta</th>
                        <th data-name="Serie">Items</th>
                        <th data-name="Estado">Datos</th>
                        <th data-name="AccItem">Inicio</th>
                    </tr>
                </thead>
                <tbody id="detail-body">
                    <ItemsRows casos={caso}/>
                    {/* Aqui el script carga tanto las filas de las cabeceras como los titulos y filas de los detalles */}
                </tbody>
            </table>
            </td>
        </tr>
    )
}

ItemsTable.propTypes = {
    caso: PropTypes.object.isRequired,
};
