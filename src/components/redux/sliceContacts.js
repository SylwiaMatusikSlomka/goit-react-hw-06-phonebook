const { createSlice } = require('@reduxjs/toolkit');

// const initialContactsState = [
//   { id: 'id-1', name: 'Jose Arcadio Morales', number: '+34 459-123-563' },
//   { id: 'id-2', name: 'Jan Nowakowski', number: '+48 443-859-125' },
//   { id: 'id-3', name: 'Bruno Bierhals', number: '+49 645-122-792' },
//   { id: 'id-4', name: 'Rolf Ruckzug', number: '+43 227-252-929' },
// ];

const localStorageData = localStorage.getItem('contacts');
const dataParsed = JSON.parse(localStorageData) || [];
const stateContacts = dataParsed;

const contactsSlice = createSlice({
  name: 'contacts',
  // initialState: initialContactsState,
  initialState: stateContacts,
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
      localStorage.setItem('contacts', JSON.stringify(state));
    },
    delateContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
      localStorage.setItem('contacts', JSON.stringify(state));
    },
  },
});

export const { addContact, delateContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
