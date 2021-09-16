import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Community from './components/Community';
import Qna from './components/Qna';
import Login from './components/Login';
import Join from './components/Join';
import Mypage from './components/Mypage';
import Write from './components/Write';


import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/community">
          <Community />
        </Route>

        <Route path="/qna">
          <Qna />
        </Route>

        <Route path="/write">
          <Write />
        </Route>
        
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/join">
          <Join />
        </Route>

        <Route path="/Mypage">
          <Mypage />
        </Route>

      </Switch>
      <Footer />
    </div>
  );
}

export default App;