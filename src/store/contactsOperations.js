import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'services/contactsApi';

export const getCurrentContacts = createAsyncThunk(
  'contacts/getCurrentContacts',
  async (_, { rejectWithValue }) => {
    try {
      API.getContacts();
    } catch (error) {
        rejectWithValue(error);
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addNewContact',
  async (contact, { rejectWithValue }) => {
    try {
      API.addContact(contact);
    } catch (error) {
        rejectWithValue(error);
    }
  }
);

export const deleteCurrentContact = createAsyncThunk(
  'contacts/deleteCurrentContact',
  async (id, { rejectWithValue }) => {
    try {
      API.deleteContact(id);
    } catch (error) {
        rejectWithValue(error);
    }
  }
);
