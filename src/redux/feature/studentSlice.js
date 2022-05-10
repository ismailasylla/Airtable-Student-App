import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
  name: "student",
  initialState: {
    studentsList: [],
    student: {},
  },
  reducers: {
    getStudents(name) {
      return name;
    },
    setStudents: (state, action) => {
      state.studentsList = action.payload;
    },
  },
});

export const { getStudents, setStudents } = studentSlice.actions;

export default studentSlice.reducer;
