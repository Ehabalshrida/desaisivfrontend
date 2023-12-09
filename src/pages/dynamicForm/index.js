import React, { useState, useEffect } from 'react';
import { fetchInputFields } from '../../services/dynamicForm';
import './style.scss'
const DynamicFormPage = () => {
  const [formData, setFormData] = useState({});
  const [jsonInput, setJsonInput] = useState([]); //  JSON input from the server

  useEffect(() => {
    // Fetch JSON input from the server
    const data = fetchInputFields()
    setJsonInput(data)
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