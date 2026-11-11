import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice.js';
import { selectFilter } from '../../redux/filters/selectors.js';
import css from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);
  const id = useId();

  return (
    <div className={css.wrapper}>
      <label className={css.label} htmlFor={id}>
        Find contacts by name
      </label>
      <input
        className={css.input}
        id={id}
        type="text"
        value={value}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}
