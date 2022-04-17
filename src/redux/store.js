import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore,applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import rootReducer from "./reducers";

//create store
export default createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk,logger)));
