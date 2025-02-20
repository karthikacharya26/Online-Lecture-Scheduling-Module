import { combineReducers, applyMiddleware, legacy_createStore } from "redux";
import { thunk } from "redux-thunk"; // Use named import
import authReducer from "./reducers/authReducer";
import adminReducer from "./reducers/adminReducer";
import instructorReducer from "./reducers/instructorReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  admin: adminReducer,
  instructor: instructorReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
