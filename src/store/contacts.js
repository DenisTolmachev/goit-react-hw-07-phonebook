import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
    isLoading: false,
    error: null,
  },
  reducers: {
    addContact: (state, action) => {
      return { ...state, items: [...state.items, action.payload] };
    },
    deleteContact: (state, action) => {
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    },
    filterContacts: (state, action) => {
      return { ...state, filter: action.payload };
    },
  },
});

export const { addContact, deleteContact, filterContacts } =
  contactsSlice.actions;

export const getItems = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
