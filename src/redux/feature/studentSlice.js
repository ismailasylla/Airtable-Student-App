import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
  name: "student",
  initialState: {
    studentsList: [],
    student: {},
  },
});
export default studentSlice.reducer;
