import { FormikErrors, useFormik } from "formik"
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

export type formikError =
  | string[]
  | string
  | FormikErrors<any>
  | FormikErrors<any>[];

const useFormikValid = (initialValues: any) => {

    const validationSchema = yup.object({
        email: yup
          .string()
          .email("Email invalid.")
          .required("Email is required."),
        password: yup
          .string()
          .required("Password invalid."),
        username: yup.number().required("Username invalid"),
        firstname: yup.string().required("first name is invalid"),
        lastname: yup.string().required("last name is invalid"),
      });
    
      const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
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