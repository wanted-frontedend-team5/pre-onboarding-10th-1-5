import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import getToDoList from '../apis/getToDoList';
import ToDoForm from '../components/ToDoForm';
import ToDo from '../components/ToDo';

function ToDoList() {
  const [toDos, setToDos] = useState([]);
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('access_token');

  useEffect(() => {
    const patchToDoList = async () => {
      try {
        const response = await getToDoList(accessToken);
        setToDos(response);
      } catch (error) {
        console.error(error);
      }
    };

    if (!accessToken) {
      navigate('/signin');
    }

    patchToDoList();
  }, [accessToken, navigate]);

  return (
    <div className="space-y-1 w-full">
      <h1 className="text-3xl">ToDo List</h1>
      <ToDoForm toDos={toDos} setToDos={setToDos} accessToken={accessToken} />
      <ul className="flex flex-col">
        {toDos.map(todo => (
          <ToDo
            key={todo.id}
            id={todo.id}
            todo={todo.todo}
            isCompleted={todo.isCompleted}
            toDos={toDos}
            setToDos={setToDos}
            accessToken={accessToken}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
