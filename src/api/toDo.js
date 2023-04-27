import { AxiosError } from 'axios';
import { axiosAuthInstance } from './axiosInstance';

const createTodo = async todo => {
  try {
    const response = await axiosAuthInstance.post('/todos', { todo });
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
    // console.log(error);
  }
};

const getTodos = async () => {
  try {
    const response = await axiosAuthInstance.get('/todos');
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
    // console.log(error);
  }
};

const deleteTodo = async toDoId => {
  try {
    const res = await axiosAuthInstance.delete(`/todos/${toDoId}`);
    return res;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
    // console.log(error);
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
    // console.log(error);
  }
};

const toDoApi = {
  createTodo,
  getTodos,
  deleteTodo,
  updateTodo,
};

export default toDoApi;
