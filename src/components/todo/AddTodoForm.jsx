import todoApi from 'api/todo';
import Input from 'components/input/Input';
import SubmitButton from 'components/button/SubmitButton';
import useInput from 'hooks/useInput';

function AddTodoForm({ refreshHandler }) {
  const [{ todo }, onChange, setValue] = useInput({ todo: '' });

  const todoSubmitHandler = async e => {
    e.preventDefault();

    if (todo.trim().length === 0) return;

    await todoApi.createTodo({ todo });
    setValue('todo', '');
    refreshHandler();
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <Input
        type="text"
        label="할 일 작성"
        dataTestid="new-todo-input"
        name="todo"
        value={todo}
        onChange={onChange}
      />
      <SubmitButton data-testid="new-todo-add-button">추가</SubmitButton>
    </form>
  );
}

export default AddTodoForm;
