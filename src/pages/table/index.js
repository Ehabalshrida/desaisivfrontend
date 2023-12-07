/*built the codes  for client side and server side and both of them use
the same component DataTable to render the data */

import React from 'react';
import DataTable from '../../components/dataTable';
import clientData from '../../dumyDatabase/dataRows.json'
const ClientSideDataTable = () => {

  return <DataTable dataList={clientData} clientSideRendering={true}/>;
};

export default ClientSideDataTable;

// import React, { useEffect, useState } from 'react';
// import DataTable from '../../components/dataTable';
// import { fetchRecordsPerPage } from '../../services/dataTable'
// const ServerSideDataTable = () => {
//   const [serverData, setServerData] = useState([]);
//   const [pageCount, setPageCount] = useState(0);

//   const fetchData = async ({ pageIndex, pageSize }) => {
//     const { rows, totalRows } = fetchRecordsPerPage(pageIndex, pageSize);
//     setServerData(rows);
//     setPageCount(Math.ceil(totalRows / pageSize));
//   };

//   useEffect(() => {
//     fetchData({ pageIndex: 0, pageSize: 10 }); // Initial data fetch
//   }, []);

//   return <DataTable data={serverData} fetchData={fetchData} controlledPageCount={pageCount} />;
// };

// export default ServerSideDataTable;
