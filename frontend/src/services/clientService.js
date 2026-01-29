// frontend/src/services/clientService.js
import apiClient from './apiClient';

export const fetchClients = () => {
    return apiClient.get('/clients');
};

export const createClient = (formData) => {
    return apiClient.post('/clients', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
    });
};
