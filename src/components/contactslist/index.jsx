import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import style from './contactslist.module.css';
import { delateContact } from 'components/redux/sliceContacts';
import { getContactsState, getFilterState } from 'components/redux/selectors';

const Contacts = () => {
  const dispatch = useDispatch();

  const contats = useSelector(getContactsState);
  const filterContact = useSelector(getFilterState);

  const deleteContact = id => {
    dispatch(delateContact(id));
  };

  const filter = contats.filter(person =>
    person.name.toLowerCase().includes(filterContact.toLowerCase())
  );

  return (
    <ul className={style.list}>
      {filter.map(({ name, id, number }) => (
        <li key={id} className={style.listItems}>
          {name}: <span>{number}</span>
          <button
            type="submit"
            className={style.listItemsBtn}
            onClick={() => deleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;

Contacts.protoTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
};
