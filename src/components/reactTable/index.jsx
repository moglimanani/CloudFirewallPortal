import React from 'react';
import ReactTable, { useTable, usePagination } from 'react-table';
// import 'react-table/react-table.css';
import './table.scss';
// import 'react-table/react-table.css';

function Table({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  // Render the UI for your table
  return (
    <>
      <table {...getTableProps()}>
        <thead className="thead">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} className="tr">
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} className="th">
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="tbody">
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="tr">
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} className="td">
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
      {/* <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
          </div> */}
    </>
  );
}

function ReactTableComponent({ columns, data }) {
  return (
    <>
      <div className="tableWrapper">
        <Table
          data={data}
          columns={columns}
          className="-striped -highlight"
          style={{
            height: '400px' // This will force the table body to overflow and scroll, since there is not enough room
          }}
        />
      </div>
    </>
  );
}

export default ReactTableComponent;
