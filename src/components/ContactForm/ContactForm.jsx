import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { addContact } from '../../redux/contacts/operations.js';
import css from './ContactForm.module.css';

const initialValues = { name: '', number: '' };

export default function ContactForm() {
  const dispatch = useDispatch();
  const id = useId();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({ name: values.name.trim(), number: values.number.trim() }),
    );
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form} autoComplete="off">
        <div className={css.field}>
          <label className={css.label} htmlFor={`${id}-name`}>
            Name
          </label>
          <Field className={css.input} id={`${id}-name`} name="name" required />
        </div>

        <div className={css.field}>
          <label className={css.label} htmlFor={`${id}-number`}>
            Number
          </label>
          <Field
            className={css.input}
            id={`${id}-number`}
            type="tel"
            name="number"
            required
          />
        </div>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
