import React, { useMemo } from 'react';
import { useTable, usePagination } from "react-table";
import './dataTable.scss'
const DataTable = ({ dataList, fetchData, clientSideRendering }) => {
  // Memos
  const columns = useMemo(
    () => [
      { Header: 'ID', accessor: 'id' },
      { Header: 'Name', accessor: 'name' },
      { Header: 'Age', accessor: 'age' },
    ],
    []
  );
  const data = useMemo(() => dataList, []);

  // Use the state and functions returned from useTable to build  UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize }
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }, // Set default page index 
    },
    usePagination
  );

  const onPageChange = (newPageIndex, pageSize) => {
    newPageIndex = Number(newPageIndex); // Convert to number
    pageSize = Number(pageSize); // Convert to number

    if (clientSideRendering) {
      gotoPage(newPageIndex);
    }
    else {
      //for server side rendering
      fetchData(newPageIndex, pageSize)
    }

  };
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => onPageChange(0, pageSize)} disabled={!canPreviousPage}>

          {"<<"}
        </button>{" "}
        <button onClick={() => onPageChange(pageIndex - 1, pageSize)} disabled={!canPreviousPage}>

          {"<"}
        </button>{" "}
        <button onClick={() => onPageChange(pageIndex + 1, pageSize)} disabled={!canNextPage}>

          {">"}
        </button>{" "}
        <button onClick={() => onPageChange(pageCount - 1, pageSize)} disabled={!canNextPage}>

          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              onPageChange(page, pageSize)
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
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
    </>
  );
};

export default DataTable;
