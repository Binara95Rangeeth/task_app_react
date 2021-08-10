import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

import { userAuth } from "./Reducers/userAuth.reducers";
import { allTasks } from "./Reducers/tasks.reducer";
import { messageBoard } from "./Reducers/messageBoard.reducer";

const loggerMiddleware = createLogger();
const rootReducer = combineReducers({ userAuth, allTasks, messageBoard });

export const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);
