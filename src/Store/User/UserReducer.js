import { EDIT_USER, FETCH_USERS_ERROR, FETCH_USERS_SUCCESS } from './UserTypes';

const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? { ...user, ...action.payload } : user
        ),
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    case FETCH_USERS_ERROR:
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
};

export default userReducer;
