import { useState, useEffect } from 'react';
import { getTodo, putTodo, deleteTodo } from '../../Api/todo';

function List({ todo }) {
  const [data, setData] = useState([]);
  const [check, setCheck] = useState(false);
  const [content, setContent] = useState('');
  const [target, setTarget] = useState([]);

  useEffect(() => {
    getTodo();
    setData(todo);
    console.log(content);
  }, []);

  return (
    <div>
      <div>Todo</div>
      <div>
        {data && data.length > 0
          ? data.map(el => {
              const { id } = el;
              const editState = target.indexOf(id) === -1;
              return (
                <div key={id}>
                  {!editState ? (
                    <>
                      <div>
                        <div
                          type="checkbox"
                          value={check}
                          onChange={() => setCheck(!check)}
                        />
                        <div>{el.todo}</div>
                      </div>
                      <div>
                        <button
                          type="button"
                          data-testid="modify-button"
                          onClick={() => {
                            if (target.indexOf(id) === -1) {
                              setTarget(prev => [...prev, id]);
                            }
                          }}
                        >
                          수정
                        </button>
                        <button
                          type="button"
                          data-testid="delete-button"
                          onClick={() => {
                            if (window.confirm('댓글을 삭제하시겠습니까?')) {
                              deleteTodo(id);
                            } else alert('취소되었습니다.');
                          }}
                        >
                          삭제
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <div
                          type="checkbox"
                          value={check}
                          onChange={() => setCheck(!check)}
                        />
                        <input
                          data-testid="modify-input"
                          type="text"
                          defaultValue={el.todo}
                          onChange={e => setContent(e.target.value)}
                        />
                      </div>
                      <div>
                        <button
                          type="button"
                          data-testid="submit-button"
                          onClick={() => {
                            putTodo(id);
                            setTarget(target.filter(el => el !== id));
                          }}
                        >
                          제출
                        </button>
                        <button
                          type="button"
                          data-testid="cancel-button"
                          onClick={() => {
                            setTarget(target.filter(el => el !== id));
                          }}
                        >
                          취소
                        </button>
                      </div>
                    </>
                  )}
                </div>
              );
            })
          : ''}
      </div>
    </div>
  );
}
export default List;
