import PropTypes from 'prop-types';

import React from 'react';
import styled from 'styled-components';
import {CASOS} from "../../apiAccess/caso.js";
import Table from "./table.jsx";
import EstadoCab from './estadoCab.jsx';
import TableItems from './tableItems.jsx';

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

export default function TableCasos() {
    const columns = React.useMemo(
      () => [
        {
          // Make an expander cell
          Header: "", //() => null, // No header
          id: 'expander', // It needs an ID
          Cell: ({ row }) => (
            // Use Cell to render an expander for each row.
            // We can use the getToggleRowExpandedProps prop-getter
            // to build the expander.
            <span {...row.getToggleRowExpandedProps()}>
              {row.isExpanded ? '👇' : '👉'}
            </span>
          ),
        },
        {
          Header: 'Caso',
          accessor: 'id'
        },
        {
            Header: 'Cliente',
            accessor: 'cliente',
        },
        {
          Header: 'Estado',
          accessor: 'estado',
          Cell: ({ value }) => <EstadoCab estado={value}/>

        }
      ],
      []
    );
  
    const data = React.useMemo(() => CASOS, [])
  
    // Create a function that will render our row sub components
    const renderRowSubComponent = React.useCallback(
      ({ row }) => (
        <TableItems row={row}/>
      ),
      []
    )
    // const renderRowSubComponent = React.useCallback(
    //   ({ row }) => (
    //     <pre
    //       style={{
    //         fontSize: '10px',
    //       }}
    //     >
    //       <code>Index: {row.index}</code><br/>
    //       <code>{JSON.stringify({ values: row.values }, null, 2)}</code>
    //       {/* <code>{JSON.stringify({ subRows: row.subRows }, null, 2)}</code> */}
    //       <code>{JSON.stringify({ original: row.original }, null, 2)}</code>
    //       <code>{JSON.stringify({ items: row.original.items }, null, 2)}</code>
    //     </pre>
    //   ),
    //   []
    // )
  
    return (
      <Styles>
        <Table
          columns={columns}
          data={data}
          // We added this as a prop for our table component
          // Remember, this is not part of the React Table API,
          // it's merely a rendering option we created for
          // ourselves
          renderRowSubComponent={renderRowSubComponent}
        />
      </Styles>
    )
  }
  
  TableCasos.propTypes = {
    columns: PropTypes.array,
    data: PropTypes.array,
    renderRowSubComponent: PropTypes.func ,
    value: PropTypes.any,
    row: PropTypes.shape({
      getToggleRowExpandedProps: PropTypes.func.isRequired,
      isExpanded: PropTypes.bool.isRequired
    })
  };