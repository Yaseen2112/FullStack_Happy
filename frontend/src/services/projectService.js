import apiClient from './apiClient';

export const fetchProjects = () => apiClient.get('/projects');
export const createProject = (formData) =>
    apiClient.post('/projects', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
    });
