import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import StudentReducer from "./feature/studentSlice";
import rootSaga from "./feature/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    student: StudentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
export default store;
