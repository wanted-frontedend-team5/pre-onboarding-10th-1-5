import { useCallback, useState } from 'react';
import todoApi from '../api/todo';

export default function useGetTodo() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getTodos = useCallback(async () => {
    const res = await todoApi.getTodos();
    setTodos(res.data.reverse());
    setIsLoading(false);
  }, []);

  return [isLoading, todos, getTodos];
}
