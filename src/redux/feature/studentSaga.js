import { takeLatest, put, fork, call } from "redux-saga/effects";
import { fetchStudents } from "./api";
import { getStudents, setStudents } from "./studentSlice";

function* onLoadStudentsAsync({ payload }) {
  try {
    const studentName = payload;
    const response = yield call(fetchStudents, studentName);
    if (response.status === 200) {
      yield put(setStudents({ ...response.data }));
    }
  } catch (error) {
    console.log(error);
  }
}
function* onLoadStudents() {
  yield takeLatest(getStudents.type, onLoadStudentsAsync);
}
export const studentsSagas = [fork(onLoadStudents)];
