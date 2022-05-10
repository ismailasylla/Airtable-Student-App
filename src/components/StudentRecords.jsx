import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const StudentRecords = () => {
  const { studentsList } = useSelector((state) => ({ ...state.student }));
  return (
    <Grid sx={{ flexGrow: 1 }} container>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={3}>
          {studentsList?.records?.map((item, index) => (
            <Grid key={index} item>
              <Card sx={{ maxWidth: "350" }}>
                <CardContent>
                  <Typography>{item.fields.Name}</Typography>
                  <Typography>{item.fields.Students}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StudentRecords;
