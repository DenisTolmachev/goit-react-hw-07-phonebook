import { configureStore } from '@reduxjs/toolkit';
import contacts from './contacts/contacts';

export const store = configureStore({
  reducer: {
    contacts,
  },
});

