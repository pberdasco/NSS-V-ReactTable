import PropTypes from 'prop-types';

import React from 'react';
import Table from "./table.jsx";
import {Styles} from "./tableCasoCSS.js";
import { getEstadoItem} from "../../estados.JS"

// const TableItemsMemo =({row}) =>{
export default function TableItems({row}) {
  
    const items = row.original.items;
    const columns = React.useMemo(() => [
                            {
                                Header: 'Item',
                                accessor: 'id'
                            },
                            {
                                Header: 'Producto',
                                accessor: 'productoId',
                            },
                            {
                                Header: 'Color',
                                accessor: 'color',
                            },
                            {
                                Header: 'Factura',
                                accessor: 'nroFactura',
                            },
                            {
                                Header: 'Serie',
                                accessor: 'serie',
                            },
                            {
                                Header: 'Estado',
                                accessor: 'estadoID',
                                Cell: ({ value }) => <>{getEstadoItem(value).nombre}</>,
                            },
                            {
                                Header: 'Acciones',
                                accessor: undefined,
                            },
                          ],
                      []      
                    );
  
    const data = React.useMemo(() => items, [items])
  
  
    return (
      <Styles>
          <Table
              columns={columns}
              data={data}
              renderRowSubComponent={null} // la dejo porque usa el mismo componente que el principal
          />
      </Styles>
    )
}
  
//TODO:  En algun momento probar estas dos lineas de abajo con la definicion de la linea 7
// const TableItems = React.memo(TableItemsMemo);
// export default TableItems

TableItems.propTypes = {
    row: PropTypes.object.isRequired
};