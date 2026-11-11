import css from './Home.module.css';

export default function Home() {
  return (
    <section className={css.hero}>
      <h1 className={css.title}>Phonebook</h1>
      <p className={css.text}>
        Register or log in to keep your own private list of contacts.
      </p>
    </section>
  );
}
