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
      <Switch>
        <Route path="/main">
          <Header />
          <Main />
          <Footer />
        </Route>

        <Route exact path="/community">
          <Header />
          <Community />
          <Footer />
        </Route>

        <Route path="/Qna">
          <Header />
          <Qna />
          <Footer />
        </Route>

        <Route path="/write">
          <Header />
          <Write />
          <Footer />
        </Route>
        
        <Route path="/login">
          <Header />
          <Login />
          <Footer />
        </Route>

        <Route path="/join">
          <Header />
          <Join />
          <Footer />
        </Route>

        <Route path="/Mypage">
          <Header />
          <Mypage />
          <Footer />
        </Route>

      </Switch>
    </div>
  );
}

export default App;