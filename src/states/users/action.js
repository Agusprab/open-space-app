/**
 * @TODO: Define all the actions (creator) for the users state
 */
import api from '../../utils/api';
// eslint-disable-next-line import/no-extraneous-dependencies, import/order
import { showLoading, hideLoading } from 'react-redux-loading-bar';

const ActionType = {
  RECEVE_USERS: 'RECEIVE_USERS',
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEVE_USERS,
    payload: {
      users,
    },
  };
}

function asyncRegisterUser({ id, name, password }) {
  return async () => {
    dispatchEvent(showLoading());
    try {
      await api.register({ id, name, password });
    } catch (error) {
      alert(error.message);
    }
    dispatchEvent(hideLoading());
  };
}

export {
  ActionType,
  receiveUsersActionCreator,
  asyncRegisterUser,
};
