import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations.js';
import css from './Contact.module.css';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <div className={css.item}>
      <div>
        <p className={css.name}>{name}</p>
        <p className={css.number}>{number}</p>
      </div>
      <button
        className={css.delete}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
}
