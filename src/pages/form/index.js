// FormPage.js
import React from 'react';
import { useForm } from 'react-hook-form';

const FormPage = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        // Handle form submission logic
        console.log(data);
    };

    return (
        <div>
            <h2>Form Page</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Name:
                    <input type="text" name="name" ref={register({ required: 'Name is required' })} />
                    {errors.name && <p>{errors.name.message}</p>}
                </label>
                <br />
                <label>
                    Email:
                    <input type="text" name="email" ref={register({ required: 'Email is required', pattern: /^\S+@\S+$/i })} />
                    {errors.email && <p>{errors.email.message}</p>}
                </label>
                <br />
                {/* Add more form fields and validation as needed */}
                <button type="submit">Submit</button>
                <label>
                    Age:
                    <input type="number" name="age" min={1} max={100} ref={register({ required: 'age is required' })} />
                    {errors.age && <p>{errors.age.message}</p>}
                </label>
                <br />
                <label>
                    Phone Number:
                    <input type="text" name="phoneNumber" ref={register({
                        required: 'Phone number is required',
                        pattern: {
                            value: /^0\d{9}$/,
                            message: 'Invalid phone number format',
                        },
                    })} />
                    {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
                </label>
                <br />
            </form>
        </div>
    );
};

export default FormPage;
