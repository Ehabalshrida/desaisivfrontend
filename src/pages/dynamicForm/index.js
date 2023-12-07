import React, { useState, useEffect } from 'react';
import { fetchInputFields } from '../../services/dynamicForm';
const DynamicFormPage = () => {
  const [formData, setFormData] = useState({});
  const [jsonInput, setJsonInput] = useState([{ "id":"1","name": "firstName", "type": "text", "label": "First Name" },
  { "id":"2","name": "secondName", "type": "text", "label": "Second Name" },
  { "id":"3","name": "age", "type": "number", "label": "Age" },
  { "id":"4","name": "password", "type": "password", "label": "Password" }]); // Example JSON input from the server

  useEffect( () => {
    // Fetch JSON input from the server
    // const data=  fetchInputFields()
    //   setJsonInput(data)
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const renderFormFields = () => {
    return jsonInput.map((field) => (
      <div key={field.id}>
        <label>
          {field.label}:
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name] || ''}
            onChange={handleInputChange}
          />
        </label>
        <br />
      </div>
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic with formData
    console.log(formData);
  };

  return (
    <div>
      <h2>Dynamic Form Page</h2>
      <form onSubmit={handleSubmit}>
        {renderFormFields()}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DynamicFormPage;