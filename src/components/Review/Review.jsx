import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { Card, CardContent, Button, CardActions, Typography } from "@mui/material";

const Review = () => {
  const reduxStore = useSelector((store) => store);

  // set useHistory ad history
  const history = useHistory();

  // function for POST request with global state
  // Then route to success page
  const handleSubmit = () => {
    axios
      .post("/api/feedback", reduxStore)
      .then((response) => {
        history.push("/success");
      })
      .catch((error) => {
        console.log("error in POST", error);
      });
  };

  return (
    // <div>
    //     <h2>Review Your Feedback</h2>
    //     <p>Feelings: {reduxStore.feeling}</p>
    //     <p>Understanding: {reduxStore.understanding}</p>
    //     <p>Support: {reduxStore.support}</p>
    //     <p>Comments: {reduxStore.comments}</p>
    //     <button data-testid="next" onClick={handleSubmit}>SUBMIT</button>
    // </div>
    <Card>
      <CardContent
        sx={{
          width: "600px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" gutterBottom textAlign="center">
          Review Your Feedback
        </Typography>
        <Typography variant="h5" component="div" gutterBottom>
          Feelings: {reduxStore.feeling}
        </Typography>
        <Typography variant="h5" component="div" gutterBottom>
          Understanding: {reduxStore.understanding}
        </Typography>
        <Typography variant="h5" component="div" gutterBottom>
            Support: {reduxStore.support}
        </Typography>
        <Typography variant="h5" component="div" gutterBottom>
            Comments: {reduxStore.comments}
        </Typography>
        <CardActions>
          <Button size="large" variant="contained" onClick={handleSubmit} data-testid="next">
            SUBMIT
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Review;
