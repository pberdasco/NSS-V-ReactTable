/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Table from "./table.jsx";
import TableItems from "./tableItems.jsx";

import { Casos } from "../../apiAccess/casosApi.js";
import { getEstadoCab, getEstadoDatos} from "../../apiAccess/estados.js";
import { Styles } from "./tableCasoCSS.js";

import tableCasoColumns from "./tableCasoColumns.jsx";

export default function TableCasos() {
// ================================================
//       Columnas de la tabla memoizadas  
  const columns = React.useMemo(() => tableCasoColumns(setEstado), []);
  
// =================================================================
//      Array original y data que es el equivalente que se 
//      le pasa a la tabla. React-Table solicita que sea memoizada
  const [listaCasos, setListaCasos] = React.useState([]);
  const data = React.useMemo(() => listaCasos, [listaCasos]);

// ==================================================================
//      Actualizacion del array base desde la api (base de datos)
//           al inicio y luego ver ante que cambios
  React.useEffect(() => {
      async function fetchData() {
        const data = await Casos.getAll();
        setListaCasos(data);
      }
      fetchData();
    }, []);

// =================================================
//      Función para renderizar detalles
  const renderRowSubComponent = React.useCallback(
    ({ row }) => <TableItems row={row} />,
    []
  );

// ==================================================
//      Prueba cambio de un atributo en una fila
  function setEstado(estado, row) {

    const updateRecordInmutable = () => {
          const newRecord = { ...row.original, estadoID: estado };
          const newlistaCasos = [...listaCasos];
          newlistaCasos[row.index] = newRecord;   // en lugar de row.index quizas hay que hacer un findIndex del id en original
          return newlistaCasos
      };

    console.log("Estado cambiado = ", estado);
    console.log(row.index, row.original);
    console.log(listaCasos[row.index])
    const newListaCasos = updateRecordInmutable();
    console.log(newListaCasos[row.index]);
    setListaCasos(newListaCasos);  

  }

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
    <Styles>
      <Table
        columns={columns}
        data={data}
        renderRowSubComponent={renderRowSubComponent}
        setCellClass={setCellClass}
      />
    </Styles>
  );
}
