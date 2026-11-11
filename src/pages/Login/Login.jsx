import LoginForm from '../../components/LoginForm/LoginForm.jsx';
import css from './Login.module.css';

export default function Login() {
  return (
    <section className={css.section}>
      <h1 className={css.title}>Log in to your account</h1>
      <LoginForm />
    </section>
  );
}
