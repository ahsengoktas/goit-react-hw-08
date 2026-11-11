import RegistrationForm from '../../components/RegistrationForm/RegistrationForm.jsx';
import css from './Registration.module.css';

export default function Registration() {
  return (
    <section className={css.section}>
      <h1 className={css.title}>Create an account</h1>
      <RegistrationForm />
    </section>
  );
}
