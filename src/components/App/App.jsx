import React from "react";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom/cjs/react-router-dom.min";
import FeedbackForm from "../FeedbackForm/FeedbackForm";
import Review from "../Review/Review";
import Success from "../Success/Success";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route path="/" exact>
          <FeedbackForm
            text="How are you feeling today?"
            inputText="Please enter a number 1-5."
            inputType="number"
            property="feeling"
            title="Feeling?"
            nextPath="/understanding"
          />
        </Route>

        <Route path="/understanding">
          <FeedbackForm
            text="How well are you understanding the content?"
            inputText="Please enter a number 1-5."
            inputType="number"
            property="understanding"
            title="Understanding?"
            nextPath="/support"
          />
        </Route>

        <Route path="/support">
          <FeedbackForm
            text="How well are you being supported?"
            inputText="Please enter a number 1-5."
            inputType="number"
            property="support"
            title="Support?"
            nextPath="/comments"
          />
        </Route>

        <Route path="/comments">
          <FeedbackForm 
            text="Any comments you would like to leave?"
            inputText=""
            inputType="text" 
            property="comments" 
            title="Comments" 
            nextPath="/review" />
        </Route>

        <Route path="/review">
          <Review />
        </Route>

        <Route path="/success">
          <Success />
        </Route>
      </Router>
    </div>
  );
}

export default App;
