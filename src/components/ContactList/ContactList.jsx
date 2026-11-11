import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact.jsx';
import { selectFilteredContacts } from '../../redux/contacts/selectors.js';
import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        </li>
      ))}
    </ul>
  );
}
