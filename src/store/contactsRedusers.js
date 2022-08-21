import { combineReducers, createReducer } from '@reduxjs/toolkit';
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

export default combineReducers({
  contacts,
  // isLoading,
  // filter,
});
