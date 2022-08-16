import axios from "axios";

axios.defaults.baseURL = 'https://62f8f320e0564480352fc15c.mockapi.io';

export async function fetchContacts() {
    const {data} = await axios.get(`/contacts`)
    return data;
}
