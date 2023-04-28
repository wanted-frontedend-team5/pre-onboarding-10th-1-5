import { useState } from 'react';

import globalStyle from '../utils/globalStyle';
import todoApi from '../api/todo';

function ToDo({ id, todo, isCompleted, toDos, setToDos }) {
  const [title, setTitle] = useState(todo);
  const [isComplete, setIsComplete] = useState(isCompleted);
  const [isModify, setIsModify] = useState(false);

  const pathModifyData = {
    todo: '',
    isCompleted: true,
  };

  const handleClickModify = () => {
    setIsModify(true);
  };

  const handleClickCancel = () => {
    setIsModify(false);
    setTitle(todo);
  };

  const handleClickSubmit = async e => {
    e.preventDefault();
    pathModifyData.todo = title;
    const response = await todoApi.updateTodo(id, pathModifyData);
    const index = toDos.findIndex(todo => todo.id === response.id);
    setToDos([...toDos.slice(0, index), response, ...toDos.slice(index + 1)]);
    setIsModify(false);
  };

  const handleChangeTitle = e => {
    const { value } = e.target;
    setTitle(value);
  };

  const handleChangeCheckbox = async () => {
    setIsComplete(!isComplete);
    pathModifyData.isCompleted = !isComplete;
    pathModifyData.todo = title;
    await todoApi.updateTodo(id, pathModifyData);
  };

  const handleClickDelete = async () => {
    await todoApi.deleteTodo(id);
    setToDos(toDos.filter(todo => todo.id !== id));
  };

  return (
    <li className="flex justify-between">
      <label className="w-10/12">
        <input
          type="checkbox"
          checked={isComplete}
          onChange={handleChangeCheckbox}
          className="mr-1"
        />
        {isModify ? (
          <input
            data-testid="modify-input"
            onChange={handleChangeTitle}
            value={title}
            className={`${globalStyle.smInputStyle} w-11/12`}
          ></input>
        ) : (
          <span>{title}</span>
        )}
      </label>

      {isModify ? (
        <div>
          <button
            type="submit"
            data-testid="submit-button"
            onClick={handleClickSubmit}
            className={globalStyle.smButtonStyle}
          >
            제출
          </button>
          <button
            type="submit"
            data-testid="cancel-button"
            onClick={handleClickCancel}
            className={globalStyle.smButtonStyle}
          >
            취소
          </button>
        </div>
      ) : (
        <div>
          <button
            type="submit"
            data-testid="modify-button"
            onClick={handleClickModify}
            className={globalStyle.smButtonStyle}
          >
            수정
          </button>
          <button
            type="submit"
            data-testid="delete-button"
            onClick={handleClickDelete}
            className={globalStyle.smButtonStyle}
          >
            삭제
          </button>
        </div>
      )}
    </li>
  );
}

export default ToDo;
