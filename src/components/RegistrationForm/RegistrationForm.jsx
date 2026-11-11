import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { register } from '../../redux/auth/operations.js';
import css from './RegistrationForm.module.css';

const initialValues = { name: '', email: '', password: '' };

const validate = (values) => {
  const errors = {};
  if (values.password.length > 0 && values.password.length < 7) {
    errors.password = 'Şifre 7 haneden küçük olamaz';
  }
  return errors;
};

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const id = useId();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label} htmlFor={`${id}-name`}>
          Username
        </label>
        <Field className={css.input} id={`${id}-name`} name="name" required />

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
        <ErrorMessage className={css.error} name="password" component="span" />

        <button className={css.button} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}
