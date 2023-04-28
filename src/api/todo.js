import { AxiosError } from 'axios';
import { axiosAuthInstance } from './client';

const createTodo = async pathData => {
  try {
    const res = await axiosAuthInstance.post('/todos', pathData);
    return res;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
    console.log(error);
  }
};

const getTodos = async () => {
  try {
    const res = await axiosAuthInstance.get('/todos');
    return res;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
    console.log(error);
  }
};

const deleteTodo = async TodoId => {
  try {
    const res = await axiosAuthInstance.delete(`/todos/${TodoId}`);
    return res;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
    console.log(error);
  }
};

const updateTodo = async (TodoId, pathData) => {
  try {
    const response = await axiosAuthInstance.put(`/todos/${TodoId}`, pathData);
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
    console.log(error);
  }
};

const todoApi = {
  createTodo,
  getTodos,
  deleteTodo,
  updateTodo,
};

export default todoApi;
