// frontend/src/services/subscriberService.js
import apiClient from './apiClient';

export const fetchSubscribers = () => {
    return apiClient.get('/subscribers');
};

export const createSubscriber = (data) => {
    // data = { email }
    return apiClient.post('/subscribers', data);
};
