import axios from 'axios';
import { BASE_URL } from 'constants/constants';

axios.defaults.baseURL = BASE_URL;

export const getContacts = async() => {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export const addContact = async(contact) => {
  const { data } = await axios.post(`/contacts`, contact);
  return data;
}

export const deleteContact = async(id) => {
    await axios.delete(`/contacts/${id}`);
}
