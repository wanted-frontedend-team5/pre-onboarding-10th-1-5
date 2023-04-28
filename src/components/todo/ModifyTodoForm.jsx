import todoApi from '../../api/todo';
import DefaultButton from '../buttons/DefaultButton';
import Input from '../inputs/Input';
import SubmitButton from '../buttons/SubmitButton';
import useInput from '../../hooks/useInput';

function ModifyTodoForm({ todo, refreshHandler, closeHandler }) {
  const [{ modifyTodo }, onChange, setValue] = useInput({ modifyTodo: '' });

  const todoSubmitHandler = async e => {
    e.preventDefault();

    if (modifyTodo.trim().length === 0) return;
    const info = {
      id: todo.id,
      todo: modifyTodo,
      isCompleted: todo.isCompleted,
    };

    await todoApi.updateTodo(info);

    setValue('setValue', '');

    refreshHandler();
    closeHandler();
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <Input
        type="text"
        label="수정할 Todo 작성"
        dataTestid="modify-input"
        name={modifyTodo}
        id="modifyTodo"
        value={modifyTodo}
        onChange={onChange}
      />
      <SubmitButton data-testid="submit-button">추가</SubmitButton>
      <DefaultButton data-testid="cancel-button" onClick={closeHandler}>
        취소
      </DefaultButton>
    </form>
  );
}

export default ModifyTodoForm;
