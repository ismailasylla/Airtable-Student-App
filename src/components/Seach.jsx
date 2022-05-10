import { Button, createStyles, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudents } from "../redux/feature/studentSlice";

const Seach = () => {
  const [name, setName] = useState([]);
  // const {
  //   studenstList: { Error: error },
  // } = useSelector((state) => ({ ...state.student }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStudents(name));
  }, [name]);

  return (
    <>
      <h2 className="title">Student Name</h2>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <TextField
          type="text"
          fullwidth
          value={name}
          sx={{ m: 1, width: "55ch" }}
          onChange={(e) => setName(e.target.value)}
        />
        {/* {error && <p className="error">{error}</p>} */}
      </form>

      <Button variant="outlined" size="large">
        Login
      </Button>
    </>
  );
};

export default Seach;
