import axios from 'axios';

const accessToken = localStorage.getItem('access_token');

export const postTodo = async todo => {
  await axios
    .post('https://www.pre-onboarding-selection-task.shop/todos', todo, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        accept: '*/*',
      },
    })
    .then(response => {
      if (response.status === 201) {
        alert('게시글이 작성되었습니다..');
        return response.data;
      }
    })

    .catch(error => {
      console.error(error);
    });
};

export const getTodo = () => {
  axios
    .get('https://www.pre-onboarding-selection-task.shop/todos', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        accept: '*/*',
      },
    })
    .then(response => {
      if (response.status === 201) {
        return response.data;
      }
    })
    .catch(error => {
      console.error(error);
    });
};

export const putTodo = async todo => {
  await axios
    .put('https://www.pre-onboarding-selection-task.shop/todos', todo, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        accept: '*/*',
      },
    })
    .then(response => {
      if (response.status === 200) {
        return response.data;
      }
    })
    .catch(error => {
      console.error(error);
    });
};

export const deleteTodo = async todo => {
  await axios
    .delete('https://www.pre-onboarding-selection-task.shop/todos', todo, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        accept: '*/*',
      },
    })
    .then(response => {
      if (response.status === 200) {
        return response.data;
      }
    })
    .catch(error => {
      console.error(error);
    });
};
