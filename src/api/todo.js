import { AxiosError } from 'axios';
import { axiosAuthInstance } from './axiosInstance';

const todoApi = {
  fetchList: async () => {
    try {
      const response = await axiosAuthInstance.get('/todos');
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return error.response;
      }
    }
  },

  create: async todoInfo => {
    try {
      const response = await axiosAuthInstance.post('/todos', todoInfo);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return error.response;
      }
    }
  },

  updateTodo: async todoInfo => {
    try {
      const response = await axiosAuthInstance.put(
        `/todos/${todoInfo.id}`,
        todoInfo,
      );
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return error.response;
      }
    }
  },

  deleteTodo: async todoId => {
    try {
      const response = await axiosAuthInstance.delete(`/todos/${todoId}`);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return error.response;
      }
    }
  },
};

export default todoApi;
