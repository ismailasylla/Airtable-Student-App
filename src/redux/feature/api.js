import axios from "axios";

const API_ENDPOINT = `https://api.airtable.com/v0/app8ZbcPx7dkpOnP0/Classes?api_key=${process.env.REACT_APP_STUDENT_AIRTABLE_API_KEY}`;

export const fetchStudents = async (studentName) =>
  axios.get(`${API_ENDPOINT}&s=${studentName}`);
