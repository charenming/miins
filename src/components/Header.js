import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import MIINS from "./../images/MIINS.png";

function Header() {
  return (
    <div class="header">
      <nav>
        <ul class="navbar">
          <li class="main">
            <Link to="/">MAIN</Link>
          </li>
          <li class="community">
            <Link to="/community">COMMUNITY</Link>
          </li>
          <li class="qna">
            <Link to="/qna">QNA</Link>
          </li>
        </ul>
      </nav>

      <div class="logo">
        <img src={MIINS} />
      </div>

      <ul class="family">
        <li class="login">
          <Link to="/login">LOGIN</Link>
        </li>
        <li class="joinUs">
          <Link to="/join">JOIN US</Link>
        </li>
        <li class="myPage">
          <Link to="/mypage">MY PAGE</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
