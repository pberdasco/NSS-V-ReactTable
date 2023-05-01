import React from 'react';
import { useTable, useExpanded } from 'react-table';
import PropTypes from 'prop-types';


export default function Table({ columns: userColumns, data, renderRowSubComponent }) {
  const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      visibleColumns,
      // state: { expanded },
  } = useTable({
                  columns: userColumns,
                  data,
                },
                useExpanded // We can useExpanded to track the expanded state
              )

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th key={column.id} {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <React.Fragment key={row.id} {...row.getRowProps().children}>
                <tr>
                  {row.cells.map(cell => {
                    return (
                      <td key={cell.id} 
                      {...cell.getCellProps({className: cell.column.className})}>{cell.render('Cell')}</td>
                    )
                  })}
                </tr>

                {row.isExpanded ? (
                  <tr>
                    <td colSpan={visibleColumns.length}>
                      {renderRowSubComponent({ row })}
                    </td>
                  </tr>
                ) : null}
              </React.Fragment>
            )
          })}
        </tbody>
      </table>
    </>
  )
}


Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      Header: PropTypes.string.isRequired,
      accessor: PropTypes.string,
    })
  ),
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderRowSubComponent: PropTypes.func.isRequired,
};

