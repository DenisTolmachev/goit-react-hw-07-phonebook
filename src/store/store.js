import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsRedusers';


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

