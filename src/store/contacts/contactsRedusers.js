import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { filteredContacts } from './contactsActions';
import {
  getCurrentContacts,
  addNewContact,
  deleteCurrentContact,
} from './contactsOperations';

const items = createReducer([], {
  [getCurrentContacts.fulfilled]: (_, { payload }) => payload,
  [addNewContact.fulfilled]: (_, { payload }) => payload,
  [deleteCurrentContact.fulfilled]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [getCurrentContacts.fulfilled]: () => false,
  [getCurrentContacts.pending]: () => true,
  [getCurrentContacts.rejected]: () => false,
  [addNewContact.pending]: () => true,
  [addNewContact.fulfilled]: () => false,
  [addNewContact.rejected]: () => false,
  [deleteCurrentContact.pending]: () => true,
  [deleteCurrentContact.fulfilled]: () => false,
  [deleteCurrentContact.rejected]: () => false,
});

const filter = createReducer('', {
  [filteredContacts]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  isLoading,
  filter,
});
