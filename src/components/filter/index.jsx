import { useDispatch } from 'react-redux';
import style from './filter.module.css';
import { setStatutFilter } from 'components/redux/sliceFilter';

const FilterContacts = () => {
  const dispatch = useDispatch();

  const filterEvcontacts = ev => [
    dispatch(setStatutFilter(ev.target.value)),
    console.log(setStatutFilter(ev.target.value)),
  ];

  return (
    <label htmlFor="filter" className={style.filter}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        className={style.filterInput}
        id="filter"
        onChange={filterEvcontacts}
      />
    </label>
  );
};
export default FilterContacts;
