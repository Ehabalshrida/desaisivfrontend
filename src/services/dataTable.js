import API from "./base";
//fetch records through demo BackEnd API
export const fetchRecordsPerPage = async (pageIndex, pageSize) => {
     const response = await API.get(`/data?page=${pageIndex}&pageSize=${pageSize}`)    
     const { rows, totalRows } =response.data
     return{ rows, totalRows }
  };