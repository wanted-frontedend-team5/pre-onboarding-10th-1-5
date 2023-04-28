import { useState, useEffect, useCallback } from 'react';
import toDoApi from '../api/toDo';

export function useToDoList() {
  const [toDos, setToDos] = useState([]);
  const getToDos = useCallback(async () => {
    const response = toDoApi.getTodos();
    setToDos(response.data);
  }, []);

  useEffect(() => {
    getToDos();
  }, [getToDos]);

  return [toDos, setToDos];
}
