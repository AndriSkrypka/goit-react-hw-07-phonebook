import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './Contacts/contactsReducers';

const store = configureStore({
  reducer: {
    contacts: rootReducer,
  },
});
export { store };





