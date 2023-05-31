import PropTypes from 'prop-types';

import React from 'react';
import Table from "./table.jsx";
import {Styles} from "./tableCSS.js";
import { getEstadoItem} from "../../apiAccess/estados.js"
import tableItemsColumns from "./tableItemsColumns.jsx";

export default function TableItems({row}) {
  
    // ================================================
    //     Array original: los items de una fila
    const items = row.original.items;

    // ================================================
    //       Columnas de la tabla memoizadas  
    const columns = React.useMemo(() => tableItemsColumns(), []);

    // =================================================================
    //      Array original y data que es el equivalente que se 
    //      le pasa a la tabla. React-Table solicita que sea memoizada 
    const data = React.useMemo(() => items, [items])
  
    // =================================================
    //      Función para renderizar detalles
    const setCellClass = (cell) => { 
        if (cell?.column?.id == "estadoID"){
          return getEstadoItem(cell.value).claseCSS;
        } 
      }

    return (
      <Styles>
          <Table
              columns={columns}
              data={data}
              renderRowSubComponent={null} // la dejo porque usa el mismo componente que el principal
              setCellClass={setCellClass}
          />
      </Styles>
    )
}
  
//TODO:  En algun momento probar estas dos lineas de abajo con la definicion de la linea 7
// const TableItems = React.memo(TableItemsMemo);
// export default TableItems

TableItems.propTypes = {
    row: PropTypes.object.isRequired,
    value: PropTypes.any
};