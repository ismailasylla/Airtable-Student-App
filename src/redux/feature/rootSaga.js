import { all } from "redux-saga/effects";
import { studentsSagas } from "./studentSaga";

export default function* rootSaga() {
  yield all([...studentsSagas]);
}
