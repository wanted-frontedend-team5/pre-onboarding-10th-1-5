import todoApi from '../../api/todo';

function AddTodoForm({ refreshHandler }) {
  const todoSubmitHandler = async e => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const myStr = formData.get('myTodo');

    if (!myStr) return;

    e.currentTarget.reset();

    await todoApi.createTodo(myStr);
    await refreshHandler();
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <label htmlFor="myTodo">
        할 일 작성 :
        <input name="myTodo" type="text" data-testid="new-todo-input" />
      </label>
      <button type="submit" data-testid="new-todo-add-button">
        추가
      </button>
    </form>
  );
}

export default AddTodoForm;
