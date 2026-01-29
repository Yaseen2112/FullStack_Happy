// frontend/src/services/contactService.js
import apiClient from './apiClient';

export const fetchContacts = () => {
    return apiClient.get('/contacts');
};

export const createContact = (data) => {
    // data = { fullName, email, mobile, city }
    return apiClient.post('/contacts', data);
};
