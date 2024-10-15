import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';   

const RegistrationForm = () => {
  const dispatch = useDispatch();   


  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    dispatch(register(values))
      .then(() => {
        setSubmitting(false); 
        resetForm(); 
      })
      .catch((error) => {
        console.error('Registration error:', error);
        setSubmitting(false); 
      });
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ isSubmitting }) => ( 
        <Form autoComplete="off">
          <label>
            Username
            <Field type="text" name="name" placeholder="Enter Username" />
            <ErrorMessage name="name" component="div" />
          </label>
          <label >
            Email
            <Field type="email" name="email" placeholder="Enter Email" />
            <ErrorMessage name="email" component="div" />
          </label>
          <label>
            Password
            <Field type="password" name="password" placeholder="Enter Password" />
            <ErrorMessage name="password" component="div"  />
          </label>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Registering...' : 'Register'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm