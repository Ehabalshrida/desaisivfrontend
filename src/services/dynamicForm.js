import API from "./base";
import dynamicForm from '../dumyDatabase/dynamicForm.json'
//fetch records through demo BackEnd API
export const fetchInputFields = () => {
    //if you have implemeted api you can call it through:
    //  const response = await API.get(`/inputFields`)    
    //  return response.data
    //else you can use the mock value
    return dynamicForm
};