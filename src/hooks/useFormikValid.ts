import { FormikErrors, useFormik } from "formik"
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./useRedux";

export type formikError =
  | string[]
  | string
  | FormikErrors<any>
  | FormikErrors<any>[];

type TypeValidationSchema = "register" | "login";

const useFormikValid = (initialValues: any, type: TypeValidationSchema, fn: any) => {

  const dispatch = useAppDispatch();

  let validationSchema;
  if (type === "register") {
    validationSchema = Yup.object({
      email: Yup.string()
        .email("Email invalid.")
        .required("Email is required."),
      password: Yup.string()
        .required("Password invalid."),
      username: Yup.string()
        .required("Username is required."),
      firstName: Yup.string()
        .required("Firstname is required."),
      lastName: Yup.string()
        .required("Lastname is required."),
    });
  }

  if (type === "login") {
    validationSchema = Yup.object({
      email: Yup.string()
        .email("Email invalid.")
        .required("Email is required."),
      password: Yup.string()
        .required("Password invalid."),
    });
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      dispatch(fn(values));
      setSubmitting(false);
    },
  });

  return {
    handleSubmit: formik.handleSubmit,
    values: formik.values,
    handleChange: formik.handleChange,
    errors: formik.errors,
    isSubmitting: formik.isSubmitting,
    onSubmit: formik.submitForm,
  };


}

export default useFormikValid;