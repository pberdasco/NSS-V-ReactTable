/* eslint-disable react/prop-types */
import BotonesCab from "./botonesCab.jsx";
import { getEstadoCab, getEstadoDatos} from "../../apiAccess/estados.js";

export default function tableCasoColumns(setEstado){
    return [
    {
      // Header: () => <span data-name="Det">Det</span>,
      Header: "Det",
      id: "expander",
      Cell: ({ row }) => (
        <span {...row.getToggleRowExpandedProps()}>
          {row.isExpanded ? "👇" : "👉"}
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
      Cell: ({ value }) => value   // Componente que lo muestre dibujito
    },
    {
      Header: "Cliente",
      // Header: () => <span data-name="Cliente">Cliente</span>,
      accessor: "cliente.id",
      //{`${caso.cliente.id} ${caso.cliente.mail} (${caso.cliente.empresa || caso.cliente.apellido})`}
    },
    {
      Header: "Acciones",
      // Header: () => <span data-name="Acciones">Acciones</span>,
      accessor: undefined,
      id: "acciones",
      Cell: ({ row }) => <BotonesCab row={row} setEstado={setEstado} />,
    },
  ];
}



  