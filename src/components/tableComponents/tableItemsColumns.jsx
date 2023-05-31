/* eslint-disable react/prop-types */
import { getEstadoItem} from "../../apiAccess/estados.js"
import BotonesDet from "./detActionButtons/botonesDet.jsx";

export default function tableItemsColumns(){
    return [
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
            id: "acciones",
            Cell: ({ row }) => <BotonesDet row={row}/>,
        },
    ]
                  
}
  
