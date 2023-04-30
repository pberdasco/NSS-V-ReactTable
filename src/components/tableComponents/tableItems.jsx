import PropTypes from 'prop-types';

import React from 'react';
import styled from 'styled-components';
//import {CASOS} from "../../apiAccess/caso.js";
import Table from "./table.jsx";
//import EstadoCab from './estadoCab.jsx';

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

export default function TableItems({row}) {
  
    const items = row.original.items;
    const columns = React.useMemo(
      () => [
        {
          Header: 'Item',
          accessor: 'id'
        },
        {
            Header: 'Producto',
            accessor: 'producto',
        },
      ],
      []
    );
  
    const data = React.useMemo(() => items, [items])
  
    
    const renderRowSubComponent = React.useCallback(
      ({ row }) => (null),
      []
    )
  
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
  
  TableItems.propTypes = {
    row: PropTypes.object.isRequired
  };