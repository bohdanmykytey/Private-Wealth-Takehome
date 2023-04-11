import * as yup from "yup";

export const editSchema = yup.object().shape({
  firstName: yup.string().required('Please fill out the first name'),
  lastName: yup.string().required('Please fill out the last name'),
  email: yup.string().email().required('Please fill out the email address'),
});
