import MIINS from './images/MIINS.png';
import './App.css';
import Write from './components/Write';
import Login from './components/Login';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route path="/index">
      <header>
      <nav>
          <ul class="navbar">
            <li class="main"><Link to="/main">MAIN</Link></li>
            <li class="main"><Link to="/community">COMMUNITY</Link></li>
            <li class="main"><Link to="/qna">QNA</Link></li>
          </ul>
        </nav>

        <div class="logo">
          <img src={MIINS}/>
        </div>

        <ul class="family">
          <li class="login"><Link to="/login">LOGIN</Link></li>
          <li class="joinUs"><Link to="/joinus">JOIN US</Link></li>
          <li class="myPage"><Link to="/mypage">MY PAGE</Link></li>
        </ul>
      </header>

        <div class="contents">
            <div class="subjects">
              <h1 class="community">COMMUNITY</h1>
              <h4 class="commuTxt">get in touch</h4>
            </div>

          <thead class="boardBox">
            <tr class="Box">
              <th class="no">No</th>
              <th class="subject">Subject</th>
              <th class="name">Name</th>
              <th class="date">Date</th>
              <th class="pop">Pop</th>
            </tr>
          </thead>
          <button class="write"><Link to="/write">Write</Link></button>
        </div> 

      <footer>
        <p class="copyright">Copyright &copy; MIINS. All rights reserved. made by Eunmi and Minjun.</p>
      </footer>
      </Route>

      <Route path="/write">
        <Write></Write>
      </Route>

      <Route path="/login">
        <Login></Login>
      </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
