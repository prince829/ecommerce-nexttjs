import * as Yup from 'yup';
export const SignupFormSchema = Yup.object().shape({
    first_name: Yup.string()
      .min(2, 'Name must be at least 2 characters long.')
      .required('First name is required.'),
    last_name: Yup.string()
      .min(2, 'Name must be at least 2 characters long.')
      .required('Last name is required.'),
    email: Yup.string()
      .email('Please enter a valid email.')
      .required('Email is required.'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters long.')
      .matches(/[a-zA-Z]/, 'Password must contain at least one letter.')
      .matches(/[0-9]/, 'Password must contain at least one number.')
      .matches(/[^a-zA-Z0-9]/, 'Password must contain at least one special character.')
      .required('Password is required.'),
  });
  export type SignupFormData = Yup.InferType<typeof SignupFormSchema>;

  export const signInFormSchema=Yup.object().shape({
    email: Yup.string().email("Please enter valid email"),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters long.')
      .matches(/[a-zA-Z]/, 'Password must contain at least one letter.')
      .matches(/[0-9]/, 'Password must contain at least one number.')
      .matches(/[^a-zA-Z0-9]/, 'Password must contain at least one special character.')
      .required('Password is required.'),

  });
  export type ISignInForm=Yup.InferType<typeof signInFormSchema>