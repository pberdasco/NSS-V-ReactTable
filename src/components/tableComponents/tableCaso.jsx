import PropTypes from "prop-types";
import { Casos } from "../../apiAccess/casosApi.js";
import React from "react";
import Table from "./table.jsx";
import TableItems from "./tableItems.jsx";
import BotonesCab from "./botonesCab.jsx";
import { getEstadoCab} from "../../estados.JS"
//import "./colorEstado.css";

import { Styles } from "./tableCasoCSS.js";

export default function TableCasos() {
  const columns = React.useMemo(
    () => [
      {
        Header: "",
        id: "expander",
        Cell: ({ row }) => (
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? "👇" : "👉"}
          </span>
        ),
      },
      {
        Header: "Caso",
        accessor: "id",
      },
      {
        Header: "Alta",
        accessor: "fechaAlta",
      },
      {
        Header: "Items",
        accessor: undefined,
        Cell: ({ row }) => {row.original.items.length}
      },
      {
        Header: "Datos",
        accessor: "statusDatosID",
        Cell: ({ value }) => value   // Componente que lo muestre con descripcion y color
      },
      {
        Header: "inicio",
        accessor: "fechaInicio",
      },
      {
        Header: "Estado",
        accessor: "estadoID",
        Cell: ({ value }) => <> <span className={getEstadoCab(value).claseCSS}> {getEstadoCab(value).nombre}</span> </>,

        //  className:  "colorAprobado"  //(value) => {getEstadoCab(value).claseCSS},
      
      },
      {
        Header: "Ret",
        accessor: "retiro",
        Cell: ({ value }) => value   // Componente que lo muestre dibujito
      },
      {
        Header: "Cliente",
        accessor: "cliente.id",
        //{`${caso.cliente.id} ${caso.cliente.mail} (${caso.cliente.empresa || caso.cliente.apellido})`}
      },
      {
        Header: "Acciones",
        accessor: undefined,
        Cell: ({ row }) => <BotonesCab row={row} setEstado={setEstado} />,
      },
    ],
    []
  );



  // const updateRecord = (i, propACambiar, newValue) => {
  //   const newRecord = { ...casos[i], [propACambiar]: newValue };
  //   const newCasos = [...casos];
  //   newCasos[i] = newRecord;
  //   setCasos(newCasos);
  // };

  const [listaCasos, setListaCasos] = React.useState([]);
  
    React.useEffect(() => {
      async function fetchData() {
        const data = await Casos.getAll();
        setListaCasos(data);
      }
      fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  const data = React.useMemo(() => listaCasos, [listaCasos]);

  // Create a function that will render our row sub components
  const renderRowSubComponent = React.useCallback(
    ({ row }) => <TableItems row={row} />,
    []
  );

  function setEstado(estado) {
    console.log("Estado cambiado = ", estado);
  }

  return (
    <Styles>
      <Table
        columns={columns}
        data={data}
        renderRowSubComponent={renderRowSubComponent}
      />
    </Styles>
  );
}

TableCasos.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  renderRowSubComponent: PropTypes.func,
  value: PropTypes.any,
  row: PropTypes.shape({
    getToggleRowExpandedProps: PropTypes.func.isRequired,
    isExpanded: PropTypes.bool.isRequired,
  }),
};
