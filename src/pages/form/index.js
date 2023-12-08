import React from 'react';
import { useForm } from 'react-hook-form';
import './style.scss'
const FormPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

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
                    <input type="text" {...register("name", { required: 'Name is required' })} />
                    {errors.name && <p>{errors.name.message}</p>}
                </label>
                <br />
                <label>
                    Email:
                    <input type="text" {...register('email', { required: 'Email is required', pattern: /^\S+@\S+$/i })} />
                    {errors.email && <p>{errors.email.message}</p>}
                </label>
                <br />
                {/* Add more form fields and validation as needed */}
                <label>
                    Age:
                    <input type="number" min={1} max={100} {...register('age', { required: 'Age is required' })} />
                    {errors.age && <p>{errors.age.message}</p>}
                </label>
                <br />
                <label>
                    Phone Number:
                    <input
                        type="text"
                        name="phoneNumber"
                        {...register('phoneNumber', {
                            required: 'Phone number is required',
                            pattern: {
                                value: /^0\d{9}$/,
                                message: 'Invalid phone number format',
                            },
                        })}
                    />
                    {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
                </label>
                <br />
                <button type="submit">Submit</button>

            </form>
        </div>
    );
};

export default FormPage;
