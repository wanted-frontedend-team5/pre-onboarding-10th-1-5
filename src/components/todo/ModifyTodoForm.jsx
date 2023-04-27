import todoApi from '../../api/todo';

function ModifyTodoForm({ todo, refreshHandler, closeHandler }) {
  const todoSubmitHandler = async e => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const myStr = formData.get('myTodo');

    const info = {
      id: todo.id,
      todo: myStr,
      isCompleted: todo.isCompleted,
    };

    await todoApi.updateTodo(info);

    if (!myStr) return;

    await todoApi.updateTodo(info);

    refreshHandler();
    closeHandler();
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <label htmlFor="myTodo">
        수정할 작성 :
        <input name="myTodo" type="text" data-testid="modify-input" />
      </label>
      <button type="submit" data-testid="submit-button">
        제출
      </button>
      <button type="button" data-testid="cancel-button" onClick={closeHandler}>
        취소
      </button>
    </form>
  );
}

export default ModifyTodoForm;
