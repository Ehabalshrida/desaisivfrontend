// DataTable.js
import React, { useMemo,useState } from 'react';
import { useTable, usePagination,useSortBy } from 'react-table';

const DataTable = ({ dataList, fetchData, controlledPageCount, clientSideRendering }) => {
  const columns = useMemo(
    () => [
      { Header: 'ID', accessor: 'id' },
      { Header: 'Name', accessor: 'name' },
      { Header: 'Age', accessor: 'age' },
    ],
    []
  );
  const data = useMemo(() => dataList, []);
console.log({data})
  
const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    pageCount,
    canNextPage,
    canPreviousPage,
    state: { pageIndex, pageSize },
    gotoPage,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0}, // Set default page index and page size
      manualPagination: true, // Enable manual pagination mode
      pageCount: clientSideRendering ? Math.ceil(data.length / 10) : controlledPageCount, // Adjust page count based on rendering mode
    },
    useSortBy,
    usePagination
  );
  
console.log({pageIndex,page,pageSize})
  const onPageChange = (newPageIndex) => {
    newPageIndex = Number(newPageIndex); // Convert to number
    gotoPage(newPageIndex);
   
  };

  return (
    <div>
      <h2>Data Table</h2>
      <div>
        {/* Buttons for pagination */}
        <button onClick={() => onPageChange(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => onPageChange(pageIndex - 1)} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => onPageChange(pageIndex + 1)} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => onPageChange(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        {/* Display current page and total pages */}
        <span>
          Page{' '}
          <strong>
            {Number(pageIndex) + 1 } of {clientSideRendering ? Math.ceil(data.length / pageSize) : controlledPageCount}
          </strong>{' '}
        </span>
        {/* Input to jump to a specific page */}
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              onPageChange(page);
            }}
          />
        </span>{' '}
        {/* Dropdown to change page size */}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      {/* Table rendering */}
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        {/* <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody> */}
        {/* <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            const { status } = row.values;
            return (
              <tr {...row.getRowProps()} status={status}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody> */}
        <tbody {...getTableBodyProps()}>
                {page.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
                </tbody>
      </table>
    </div>
  );
};

export default DataTable;
