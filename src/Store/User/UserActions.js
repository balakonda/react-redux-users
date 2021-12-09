import { EDIT_USER, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from './UserTypes';

export const editUser = (user) => {
  return {
    type: EDIT_USER,
    payload: user,
  };
};

export const fetchUserSuccess = (list) => {
  console.log('list', list);
  return {
    type: FETCH_USERS_SUCCESS,
    payload: list,
  };
};

export const fetchUserError = (msg) => {
  return {
    type: FETCH_USERS_ERROR,
    payload: msg,
  };
};

export const getUser = () => {
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not OK');
        }
        return res.json();
      })
      .then((data) => {
        dispatch(fetchUserSuccess(data));
      })
      .catch((e) => {
        dispatch(fetchUserError(e.message));
      });
  };
};
