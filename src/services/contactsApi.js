import axios from 'axios';

axios.defaults.baseURL = 'https://62f8f320e0564480352fc15c.mockapi.io';

export const getContacts = async() => {
  const { data } = await axios.get(`/contacts`).then(res => res.data);
  return data;
}

export const addContact = async(contact) => {
  const { data } = await axios.post(`/contacts`, contact);
  return data;
}

export const deleteContact = async(id) => {
    await axios.delete(`/contacts/${id}`);
}
