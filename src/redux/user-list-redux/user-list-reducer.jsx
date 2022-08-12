import { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } from "./user-list-actions"
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "./user-list-types"
import api from "../../interceptor/api"

const initialState = {
  loading: false,
  users: [],
  error: ''
}

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: ''
      }
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload
      }
    default: return state
  }
}
export default UserReducer;

//Get user api call
export const apiUserData = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest())
    api.get('/user')
      .then(response => {
        let users = response.data.data.map(user => user)
        dispatch(fetchUsersSuccess(users))
      })
      .catch(error => {
        dispatch(fetchUsersFailure(error.message))
      })
  }
}