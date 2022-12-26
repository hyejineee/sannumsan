import React from 'react';

import { Switch, Route } from 'react-router-dom';

import HomePage from 'page/HomePage';
import QuestionPage from 'page/QuestionsPage';
import ResultPage from 'page/ResultPage';

export default function App() {
  return (
    <div>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/questions" component={QuestionPage} />
        <Route path="/result" component={ResultPage} />
      </Switch>
    </div>
  );
}
