import ContactsForm from './contactsform';
import Contacts from './contactslist';
import FilterContacts from './filter';

export const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactsForm />
      <div>
        <h2>Contacts</h2>
        <FilterContacts />
        <Contacts />
      </div>
    </div>
  );
};
export default App;
