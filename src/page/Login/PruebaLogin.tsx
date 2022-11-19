import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const PruebaLogin = () => {

    const initalState = {
        firstName: '',
        lastName: '',
        email: '',
    }

    const validationSchema = Yup.object({
        firstName: Yup.string()
          .required('Required'),
        lastName: Yup.string()
          .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
      });

    const formik = useFormik({
        initialValues: initalState,
        validationSchema: validationSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
            />
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default PruebaLogin;