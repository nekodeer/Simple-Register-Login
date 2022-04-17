import { SET_CURRENT_USER } from "../constant";
import { isEmpty } from "lodash";
// reducer for authenticate the login info
const initialState = {
  user: {},
  isAuthenticated: false
};

const auth = (prevState = initialState, action) => {
  const { type, data } = action;
  switch (type) {
    case SET_CURRENT_USER:
      return {
        user:data,
        isAuthenticated:!isEmpty(data)
      }
    default:
      return prevState;
  }
}
export default auth