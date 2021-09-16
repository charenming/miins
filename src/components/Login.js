import React from 'react';
import { Route, Switch } from 'react-router-dom';

function login() {
    return (
        <div class="contents">
            <div class="inputBox">
                <input id="memberId" name="memberId" placeholder="아이디"></input>
                <input id="memberPw" name="memberPw" placeholder="비밀번호"></input>
            </div>
            <div class="loginChkBox">
                <button class="loginBtn" onclick="memberAction.login;">로그인</button>
            </div>
        </div>
    )
}

export default login
