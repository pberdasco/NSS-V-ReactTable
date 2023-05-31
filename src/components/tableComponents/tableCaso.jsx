/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Table from "./table.jsx";
import TableItems from "./tableItems.jsx";

import { Casos } from "../../apiAccess/casosApi.js";
import { getEstadoCab, getEstadoDatos} from "../../apiAccess/estados.js";
import { Styles } from "./tableCSS.js";

import tableCasoColumns from "./tableCasoColumns.jsx";

import { useTableContext } from "../contexts/tableContextHook.jsx";
import { OrdenModal } from "../modalForms/ordenModal.jsx";

export default function TableCasos() {
  const {listaCasos, setListaCasos, listaCasosUpdated} = useTableContext();

  // ================================================
  //       Columnas de la tabla memoizadas  
  const columns = React.useMemo(() => tableCasoColumns(), []);
  
  // =================================================================
  //      Array original y data que es el equivalente que se 
  //      le pasa a la tabla. React-Table solicita que sea memoizada 
  const data = React.useMemo(() => listaCasos, [listaCasos]);

  // ==================================================================
  //      Actualizacion del array base desde la api (base de datos)
  //           al inicio y luego ver ante que cambios
  React.useEffect(() => {
      async function fetchData() {
        const dataCasos = await Casos.getAll();
        setListaCasos(dataCasos);
      }
      fetchData();
    }, [listaCasosUpdated]);

  // =================================================
  //      Función para renderizar detalles
  const renderRowSubComponent = React.useCallback(
    ({ row }) => <TableItems row={row} />,
    []
  );



  // ==================================================
  //       Clases especiales para ciertas celdas
  const setCellClass = (cell) => { 
    if (cell?.column?.id == "estadoID"){
      return getEstadoCab(cell.value).claseCSS;
    } 
    if (cell?.column?.id == "statusDatosID"){
      return getEstadoDatos(cell.value).claseCSS;
    } 
  }

  return (
    <>
    <div> Filtros</div>
    <Styles>
      <Table
        columns={columns}
        data={data}
        renderRowSubComponent={renderRowSubComponent}
        setCellClass={setCellClass}
      />
    </Styles>
    <OrdenModal />
    </>
  );
}
