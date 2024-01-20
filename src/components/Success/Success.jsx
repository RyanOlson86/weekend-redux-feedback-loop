import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Card, CardContent, Button, CardActions, Typography } from "@mui/material";

const Success = () => {
  // set useDispatch as dispatch
  const dispatch = useDispatch();

  // set useHistory ad history
  const history = useHistory();

  // Reset store and go back to index
  const handleClick = () => {
    dispatch({ type: "RESET" });
    history.push("/");
  };

  return (
    // <div>
    //     <h2>Thank You!</h2>
    //     <button data-testid="next" onClick={handleClick}>Leave New Feedback</button>
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
          Review Submitted.
        </Typography>
        <Typography variant="h3" gutterBottom textAlign="center">
          Thank You!
        </Typography>
        <CardActions>
          <Button size="large" variant="contained" onClick={handleClick} data-testid="next">
            Leave New Feedback
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Success;
