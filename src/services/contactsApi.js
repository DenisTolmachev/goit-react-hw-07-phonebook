import axios from 'axios';
import { BASE_URL } from 'constants/constants';

axios.defaults.baseURL = BASE_URL;

export const getContacts = async () => {
  return await axios.get(`/contacts`);
};

export const addContact = async contact => {
  return await axios.post(`/contacts`, contact);
};

export const deleteContact = async id => {
  return await axios.delete(`/contacts/${id}`);
};
