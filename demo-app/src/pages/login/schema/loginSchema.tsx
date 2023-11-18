import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  email: yup.string().required('Email is required.').email('Invalid email address.'),
  password: yup.string()
    .required('Password is required.')
    .min(8, 'Password must be at least 8 characters long.')
    .matches(/[A-Z]/, 'Password must include at least one uppercase letter.')
    .matches(/\d/, 'Password must include at least one numeric digit.'),
});

// // Example usage:
// const formData = {
//   email: 'test@example.com',
//   password: 'Abc12345',
// };

// try {
//   validationSchema.validateSync(formData, { abortEarly: false });
//   // Validation successful, continue with your logic
// } catch (validationError) {
//   // Handle validation errors
//   console.error(validationError.errors);
// }
