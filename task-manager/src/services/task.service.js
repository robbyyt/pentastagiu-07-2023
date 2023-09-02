import { API_ENDPOINT } from '../utils/constants';

export const getTasks = () => fetch(`${API_ENDPOINT}/tasks`).then(response => {
  if(!response.ok) {
    throw new Error('Server failed to respond!')
  }

  return response.json();
});

export const createTask = (name, description) => fetch(`${API_ENDPOINT}/tasks`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name, description })
}).then(response => {
  if(!response.ok) {
    throw new Error('Server failed to respond!')
  }

  return response.json();
});

export const editTask = (id, name, description) => fetch(`${API_ENDPOINT}/tasks/${id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name, description })
}).then(response => {
  if(!response.ok) {
    throw new Error('Server failed to respond!')
  }

  return response.json();
});

export const patchTask = (id, partialTask) => fetch(`${API_ENDPOINT}/tasks/${id}`, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(partialTask)
}).then(response => {
  if(!response.ok) {
    throw new Error('Server failed to respond!')
  }

  return response.json();
});

export const deleteTask = (id) => fetch(`${API_ENDPOINT}/tasks/${id}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  }
}).then(response => {
  if(!response.ok) {
    throw new Error('Server failed to respond!')
  }

  return response.json();
});