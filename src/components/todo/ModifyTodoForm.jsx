import todoApi from 'api/todo';
import DefaultButton from 'components/button/DefaultButton';
import SubmitButton from 'components/button/SubmitButton';
import Input from 'components/input/Input';
import useInput from 'hooks/useInput';
import globalStyle from 'utils/globalStyle';

function ModifyTodoForm({ todo, refreshHandler, closeHandler }) {
  const [{ modifyTodo }, onChange, setValue] = useInput({
    modifyTodo: todo.todo,
  });

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
    <form
      onSubmit={todoSubmitHandler}
      className="w-full align-bottom flex justify-between"
    >
      <Input
        type="text"
        dataTestid="modify-input"
        name="modifyTodo"
        id="modifyTodo"
        value={modifyTodo}
        onChange={onChange}
        className={globalStyle.smInputStyle}
      />
      <div>
        <SubmitButton
          dataTestid="submit-button"
          className={globalStyle.smButtonStyle}
        >
          제출
        </SubmitButton>
        <DefaultButton dataTestid="cancel-button" onClick={closeHandler}>
          취소
        </DefaultButton>
      </div>
    </form>
  );
}

export default ModifyTodoForm;
