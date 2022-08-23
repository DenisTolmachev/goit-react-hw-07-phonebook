import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'services/contactsApi';
import { toast } from 'react-toastify';

export const getCurrentContacts = createAsyncThunk(
  'contacts/getCurrentContacts',
  async () => {
    try {
      const data = await API.getContacts();
      return data;
    } catch (error) {
      return toast.error(error);
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addNewContact',
  async contact => {
    try {
      await API.addContact(contact);
      toast.success('Contact added!');
      const data = await API.getContacts();
      return data;
    } catch (error) {
      return toast.error(error);
    }
  }
);

export const deleteCurrentContact = createAsyncThunk(
  'contacts/deleteCurrentContact',
  async id => {
    try {
      await API.deleteContact(id);
      toast.success('Contact deleted!');
      const data = await API.getContacts();
      return data;
    } catch (error) {
      return toast.error(error);
    }
  }
);
