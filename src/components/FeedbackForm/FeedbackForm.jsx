import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Card, CardContent, Button, CardActions, Typography, Box, TextField } from "@mui/material";
import React from "react";

const FeedbackForm = ({ text, property, title, nextPath, inputText, inputType}) => {
  // Local state to store temporary form inputs
  const [formInput, setFormInput] = useState("");

  // set useDispatch as dispatch
  const dispatch = useDispatch();

  // set useHistory ad history
  const history = useHistory();

  // Function to handle when "next" is clicked
  // Function should dispatch inputs to store.js using props then use route to go to next form input
  const handleNext = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_FEEDBACK",
      payload: {
        [property]: formInput,
      },
    });
    history.push(nextPath);
  };

  return (
    <>
      {/* <h2>{text}</h2>
      <form onSubmit={handleNext}>
        <label>{title}</label>
        <input type="text" data-testid="input" onChange={(event) => setFormInput(event.target.value)} />
        <button type="submit" data-testid="next">
          Next
        </button>
      </form> */}

      <React.Fragment>
        <CardContent sx={{
            width: "600px", 
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
            }}>
          <Typography variant="h3" gutterBottom textAlign="center">{text}</Typography>
          <Typography variant="h5" component="div" gutterBottom>
            {inputText}
          </Typography>
          <Box component="form">
            <TextField
              label={title}
              variant="outlined"
              type={inputType}
              size="large"
              data-testid="input"
              onChange={(event) => setFormInput(event.target.value)}
            ></TextField>
          </Box>
        </CardContent>
        <CardActions>
          <Button size="large" variant="contained" onClick={handleNext} data-testid="next">
            NEXT
          </Button>
        </CardActions>
      </React.Fragment>
    </>
  );
};

export default FeedbackForm;
