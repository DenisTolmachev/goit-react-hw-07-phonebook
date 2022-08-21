import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'services/contactsApi';

console.log(API.getContacts());

export const getCurrentContacts = createAsyncThunk(
  'contacts/getCurrentContacts',
  async (_, { rejectWithValue }) => {
    try {
      return API.getContacts();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addNewContact',
  async (contact, { rejectWithValue }) => {
    try {
      return API.addContact(contact);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteCurrentContact = createAsyncThunk(
  'contacts/deleteCurrentContact',
  async (id, { rejectWithValue }) => {
    try {
      return API.deleteContact(id);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
