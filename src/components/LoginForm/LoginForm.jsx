import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { logIn } from '../../redux/auth/operations.js';
import css from './LoginForm.module.css';

const initialValues = { email: '', password: '' };

export default function LoginForm() {
  const dispatch = useDispatch();
  const id = useId();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form} autoComplete="off">
        <label className={css.label} htmlFor={`${id}-email`}>
          Email
        </label>
        <Field
          className={css.input}
          id={`${id}-email`}
          type="email"
          name="email"
          required
        />

        <label className={css.label} htmlFor={`${id}-password`}>
          Password
        </label>
        <Field
          className={css.input}
          id={`${id}-password`}
          type="password"
          name="password"
          required
        />

        <button className={css.button} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
}
