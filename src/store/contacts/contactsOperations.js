import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'services/contactsApi';
import { toast } from 'react-toastify';

export const getCurrentContacts = createAsyncThunk(
  'contacts/getCurrentContacts',
  async (_, { rejectWithValue }) => {
    try {
      const data = await API.getContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addNewContact',
  async (contact, { rejectWithValue }) => {
    try {
      await API.addContact(contact);
      toast.success('Contact added!');
      const data = await API.getContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteCurrentContact = createAsyncThunk(
  'contacts/deleteCurrentContact',
  async (id, { rejectWithValue }) => {
    try {
      await API.deleteContact(id);
      toast.success('Contact deleted!');
      const data = await API.getContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
