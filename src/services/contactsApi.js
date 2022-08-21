import axios from 'axios';

axios.defaults.baseURL = 'https://62f8f320e0564480352fc15c.mockapi.io';

export async function getContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post(`/contacts`, contact);
  return data;
}

export async function deleteContact(id) {
    await axios.delete(`/contacts/${id}`);
}
