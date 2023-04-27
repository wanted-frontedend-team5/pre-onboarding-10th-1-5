// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import TodoItem from '../../components/todo/todoItem';

// // API 통신에 필요한 설정 및 변수 선언
// const token = localStorage.getItem('token');
// const host = 'https://www.pre-onboarding-selection-task.shop/';
// export const toDoAPI = axios.create({
//   baseURL: host,
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${token}`,
//   },
// });

// function ToDoList() {
//   // 상태 선언
//   const [inputValue, setInputValue] = useState('');
//   const [toDos, setToDos] = useState([]);

//   // 서버에서 todo data를 받아와 toDos에 갱신
//   const getToDos = async () => {
//     const response = await toDoAPI.get('./todos');
//     setToDos(response.data);
//     // console.log(response);
//   };
//   // 새로 입력받은 todo를 서버에 post, 화면의 toDos 갱신
//   const addToDo = async () => {
//     const createNewToDo = {
//       todo: inputValue,
//       isCompleted: false,
//     };
//     await toDoAPI.post('./todos', createNewToDo);
//     getToDos();
//     // console.log(response);
//   };

//   // todo 삭제
//   const deleteToDo = async todo => {
//     await toDoAPI.delete(`./todos/${todo.id}`);
//     // console.log(response);
//     getToDos();
//   };

//   // 체크박스 변경
//   const setCheck = async todo => {
//     await toDoAPI.put(`./todos/${todo.id}`, {
//       todo: todo.todo,
//       isCompleted: !todo.isCompleted,
//     });
//     getToDos();
//   };

//   // Side Effect
//   useEffect(() => {
//     if (token) getToDos();
//   }, []);

//   return (
//     <>
//       <form onSubmit={addToDo}>
//         <input
//           data-testid="new-todo-input"
//           value={inputValue}
//           onChange={e => setInputValue(e.target.value)}
//         />
//         <button data-testid="new-todo-add-button" type="submit">
//           추가
//         </button>
//       </form>
//       <ul>
//         {toDos.map(todo => (
//           <TodoItem
//             key={todo.id}
//             todo={todo}
//             deleteToDo={deleteToDo}
//             setCheck={setCheck}
//             getTodos={getToDos}
//           />
//         ))}
//       </ul>
//     </>
//   );
// }

// export default ToDoList;
