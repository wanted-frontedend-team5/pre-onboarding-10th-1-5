import axios from 'axios';

const todoAxios = axios.create({
  baseURL: 'https://www.pre-onboarding-selection-task.shop/todos',
});

export const createTodo = async todo => {
  try {
    const accessToken = localStorage.getItem('token');
    const response = await todoAxios.post(
      '/',
      { todo },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('error', error);
  }
};

export const getTodos = async () => {
  try {
    const accessToken = localStorage.getItem('token');
    const response = await todoAxios.get('/', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateTodo = async (todoId, todo, isCompleted) => {
  try {
    const accessToken = localStorage.getItem('token');
    const response = await todoAxios.put(
      `/${todoId}`,
      { todo, isCompleted },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteTodo = async todoId => {
  try {
    const accessToken = localStorage.getItem('token');
    await todoAxios.delete(`/${todoId}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return null;
  } catch (error) {
    console.error(error);
  }
};
