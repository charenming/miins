// import MIINS from './images';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
      <nav>
          <ul class="navbar">
            <li class="main">MAIN</li>
            <li class="main">COMMUNITY</li>
            <li class="main">QNA</li>
          </ul>
        </nav>

        <div class="logo">
         <p><a href="#">MIINS</a></p>
        </div>

        <ul class="family">
          <li class="login">LOGIN</li>
          <li class="joinUs">JOIN US</li>
          <li class="myPage">MY PAGE</li>
        </ul>
      </header>
      <div class="contents">
        <div class="subject">
          <h1 class="community">COMMUNITY</h1>
          <h4 class="commuTxt">get in touch</h4>
        </div>

        <thead class="boardBox">
          <tr class="Box">
            <th class="no">No</th>
            <th class="subject">subject</th>
            <th class="name">name</th>
            <th class="date">date</th>
          </tr>
			  </thead>
        <button class="write">글쓰기</button>
      </div> 

      <footer>
        <p class="copyright">Copyright &copy; MIINS. All rights reserved. made by Eunmi and Minjun.</p>
      </footer>
    </div>
  );
}

export default App;
