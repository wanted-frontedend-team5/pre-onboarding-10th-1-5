import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import todoApi from '../../api/todo';
import ToDoForm from '../../components/ToDoForm';
import ToDo from '../../components/ToDo';

function ToDoList() {
  const [toDos, setToDos] = useState([]);
  const navigate = useNavigate();

  console.log(toDos);
  useEffect(() => {
    const patchToDoList = async () => {
      const response = await todoApi.getTodos();
      setToDos(response);
    };

    patchToDoList();
  }, [navigate]);

  return (
    <div className="space-y-1 w-full">
      <h1 className="text-3xl">ToDo List</h1>
      <ToDoForm toDos={toDos} setToDos={setToDos} />
      <ul className="flex flex-col">
        {toDos.map(todo => (
          <ToDo
            key={todo.id}
            id={todo.id}
            todo={todo.todo}
            isCompleted={todo.isCompleted}
            toDos={toDos}
            setToDos={setToDos}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
