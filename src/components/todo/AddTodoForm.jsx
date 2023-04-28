import todoApi from 'api/todo';
import Input from 'components/input/Input';
import SubmitButton from 'components/button/SubmitButton';
import useInput from 'hooks/useInput';
import globalStyle from 'utils/globalStyle';

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
    <form onSubmit={todoSubmitHandler} className="w-full flex justify-between">
      <Input
        type="text"
        dataTestid="new-todo-input"
        name="todo"
        value={todo}
        onChange={onChange}
        className={globalStyle.inputStyle}
      />
      <SubmitButton
        dataTestid="new-todo-add-button"
        className={globalStyle.buttonStyle}
      >
        추가
      </SubmitButton>
    </form>
  );
}

export default AddTodoForm;
