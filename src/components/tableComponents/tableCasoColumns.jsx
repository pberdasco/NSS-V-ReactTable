/* eslint-disable react/prop-types */
import BotonesCab from "./cabActionButtons/botonesCab.jsx";
import { getEstadoCab, getEstadoDatos} from "../../apiAccess/estados.js";
import {FaTruck, FaTrashAlt, FaAngleDoubleUp, FaAngleDoubleDown} from "react-icons/fa"

export default function tableCasoColumns(){
    return [
    {
      // Header: () => <span data-name="Det">Det</span>,
      Header: "Det",
      id: "expander",
      Cell: ({ row }) => (
        <span {...row.getToggleRowExpandedProps()}>
          {row.isExpanded ? <FaAngleDoubleUp/> : <FaAngleDoubleDown/>}
        </span>
      ),
    },
    {
      Header: "Caso",
      // Header: () => <span data-name="Caso">Caso</span>,
      accessor: "id",
    },
    {
      Header: "Alta",
      // Header: () => <span data-name="Alta">Alta</span>,
      accessor: "fechaAlta",
    },
    {
      Header: "Items",
      // Header: () =><span data-name="Items">Items</span>,
      accessor: undefined,
      id: "items" ,
      Cell: ({ row }) => <>{row.original.items.length}</>
    },
    {
      Header: "Datos",
      // Header: () => <span data-name="Datos">Datos</span>,
      accessor: "statusDatosID",
      Cell: ({ value }) => <>{getEstadoDatos(value).nombre}</>,  
    },
    {
      Header: "Inicio",
      // Header: () => <span data-name="Inicio">Inicio</span>,
      accessor: "fechaInicio",
    },
    {
      Header: "Estado",
      // Header: () => <span data-name="Estado">Estado</span>,
      accessor: "estadoID",
      Cell: ({ value }) => <>{getEstadoCab(value).nombre}</>,      
    },
    {
      Header: "Ret",
      // Header: () =><span data-name="Ret">Ret</span>,
      accessor: "retiro",
      Cell: ({ value }) => (value == 0 ? <FaTrashAlt/> : <FaTruck/>)  // Componente que lo muestre dibujito
    },
    {
      Header: "Cliente",
      // Header: () => <span data-name="Cliente">Cliente</span>,
      accessor: "cliente.id",
      Cell: ({row}) => <>{`${row.original.cliente.id} ${row.original.cliente.mail} (${row.original.cliente.empresa || row.original.cliente.apellido})`}</>
    },
    {
      Header: "Acciones",
      // Header: () => <span data-name="Acciones">Acciones</span>,
      accessor: undefined,
      id: "acciones",
      Cell: ({ row }) => <BotonesCab row={row}/>,
    },
  ];
}



  