import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { filteredContacts } from './contactsActions';
import {
  getCurrentContacts,
  addNewContact,
  deleteCurrentContact,
} from './contactsOperations';

const contacts = createReducer([], {
  [getCurrentContacts.fulfilled]: (_, { payload }) => payload,
  [addNewContact.fulfilled]: (state, { payload }) => {
    if (!payload) {
      return state;
    }
    return [...state, payload];
  },
  [deleteCurrentContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload.id),
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
    [filteredContacts]: (_, {payload}) => payload,
})

export default combineReducers({
  contacts,
  isLoading,
  filter,
});
