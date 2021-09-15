import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Board from './components/Board';
import Join from './components/Join';
import Write from './components/Write';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Header />
          <Board />
          <Footer />
        </Route>

        <Route path="/write">
          <Header />
          <Write />
          <Footer />
        </Route>

        <Route path="/join">
          <Header />
          <Join />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App

