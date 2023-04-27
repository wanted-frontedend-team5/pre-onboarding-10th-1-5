import { AxiosError } from 'axios';
import { axiosAuthInstance } from './axiosInstance';

const createTodo = async todo => {
  try {
    const res = await axiosAuthInstance.post('/todos', { todo });
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

const updateTodo = async (TodoId, todo, isCompleted) => {
  try {
    const response = await axiosAuthInstance.put(`/todos/${TodoId}`, {
      todo,
      isCompleted,
    });
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
