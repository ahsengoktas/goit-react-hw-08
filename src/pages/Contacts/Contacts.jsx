import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import Filter from '../../components/Filter/Filter.jsx';
import ContactList from '../../components/ContactList/ContactList.jsx';
import { fetchContacts } from '../../redux/contacts/operations.js';
import {
  selectError,
  selectIsLoading,
} from '../../redux/contacts/selectors.js';
import css from './Contacts.module.css';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
    // Fetch contacts once when the page mounts.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={css.section}>
      <div className={css.sidebar}>
        <h1 className={css.title}>Your contacts</h1>
        <ContactForm />
      </div>
      <div className={css.content}>
        <Filter />
        {isLoading && <p className={css.info}>Loading...</p>}
        {error && <p className={css.error}>Error: {error}</p>}
        <ContactList />
      </div>
    </section>
  );
}
