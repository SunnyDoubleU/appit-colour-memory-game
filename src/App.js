import React from 'react';
import './App.css';
import { Route } from "react-router-dom"
import HighScores from './pages/HighScores';
import Game from './pages/Game';
import Home from './pages/Home'

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/game" component={Game} />
      <Route exact path="/highscores" component={HighScores} />
      <Route path="/highscores/:score" component={HighScores} />
    </div>
  );
}

export default App;
