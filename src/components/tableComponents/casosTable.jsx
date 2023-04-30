import "./tableStyles.css";
import { Casos } from "../../apiAccess/casosApi.js";
import CasosRows from "./casosRows.jsx";
import { useState, useEffect } from "react";

export default function CasosTable(){
    const [listaCasos, setListaProductos] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        const data = await Casos.getAll();
        setListaProductos(data);
      }
      fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="grilla">
            <table className="main-table grillasStd">
                <thead>
                    <tr className="titulos-cabecera">
                        <th data-name="Det">Det</th>
                        <th data-name="Caso">Caso</th>
                        <th data-name="Alta">Alta</th>
                        <th data-name="Items">Items</th>
                        <th data-name="Datos">Datos</th>
                        <th data-name="Inicio">Inicio</th>
                        <th data-name="Estado">Estado</th>
                        <th data-name="Ret">Ret</th>
                        <th data-name="Cliente">Cliente</th>
                        <th data-name="AccCaso">Acciones Caso!</th>
                    </tr>
                </thead>
                <tbody id="main-body">
                    <CasosRows casos={listaCasos}/>
                    {/* Aqui el script carga tanto las filas de las cabeceras como los titulos y filas de los detalles */}
                </tbody>
            </table>
        </div>
    )
}