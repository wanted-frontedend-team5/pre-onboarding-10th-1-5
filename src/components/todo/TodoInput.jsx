import { AiOutlinePlus } from 'react-icons/ai';
import useInput from '../../hooks/useInput';
import Button from '../Button';
import todoApi from '../../api/todo';

export default function TodoInput({ getTodos }) {
  const [{ todo }, onChange, setValue] = useInput({ todo: '' });

  const handleSubmit = async e => {
    e.preventDefault();

    if (!todo) {
      return alert('투두를 입력해주세요.');
    }

    await todoApi.createTodo(todo);
    getTodos();
    setValue('todo', '');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-row">
      <input
        onChange={onChange}
        type="text"
        data-testid="new-todo-input"
        placeholder="할 일을 입력하세요."
        value={todo}
        name="todo"
      />
      <Button data-testid="new-todo-add-button" isSuccess>
        <AiOutlinePlus />
      </Button>
    </form>
  );
}
