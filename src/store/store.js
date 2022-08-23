import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsRedusers';


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

