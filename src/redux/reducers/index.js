import { combineReducers } from "redux";
import auth from "./auth";
// import signUpReducer from "./signUpReducer";
import flashMessage from "./flashmessage";

const rootReducer = combineReducers({auth,flashMessage})

export default rootReducer