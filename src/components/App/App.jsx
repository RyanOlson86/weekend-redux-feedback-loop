import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import Review from '../Review/Review';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route path='/' exact>
          <FeedbackForm text="How are you feeling today? Please enter a number 1-5." property="feeling" title="Feeling?" nextPath="/understanding"/>
        </Route>

        <Route path='/understanding'>
          <FeedbackForm text="How well are you understanding the content? Please enter a number 1-5." property="understanding" title="Understanding?" nextPath="/support"/>
        </Route>

        <Route path='/support'>
          <FeedbackForm text="How well are you being supported? Please enter a number 1-5." property="support" title="Support?" nextPath="/comments"/>
        </Route>

        <Route path='/comments'>
          <FeedbackForm text="Any comments you would like to leave?" property="comments" title="Comments" nextPath="/review"/>
        </Route>


        <Route path='/review'>
          <Review />
        </Route>

      </Router>
      
    </div>
  );
}

export default App;
