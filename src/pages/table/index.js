/*built the codes  for client side and server side and both of them use
the same component DataTable to render the data */

import React from 'react';
import DataTable from '../../components/dataTable/dataTable';
import clientData from '../../dumyDatabase/dataRows.json'
const ClientSideDataTable = () => {

  return <DataTable dataList={clientData} clientSideRendering={true} />;
};

export default ClientSideDataTable;
// for server side rendering 
// import React, { useEffect, useState } from 'react';
// import DataTable from '../../components/dataTable';
// import { fetchRecordsPerPage } from '../../services/dataTable'
// const ServerSideDataTable = () => {
//   const [serverData, setServerData] = useState([]);

//   const fetchData = async ( pageIndex, pageSize ) => {
//     const  res = fetchRecordsPerPage(pageIndex, pageSize);
//     setServerData(res);
//   };

//   useEffect(() => {
//     fetchData(0 , 10 ); // Initial data fetch
//   }, []);

//   return <DataTable dataList={serverData} fetchData={fetchData}  />;
// };

// export default ServerSideDataTable;
