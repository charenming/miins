import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './../css/Reset.css';
import './../css/Login.css';

function login() {
    return (
        <div class="contents">
            <div class="subjects">
                <h1 class="bodyNm">LOGIN</h1>
                <h4 class="bodySubNm"> </h4>
            </div>
            <table class="tdLeft">
                <cols>
                    <col />
                    <col />
                </cols>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <td><input id="memberId" name="memberId" placeholder="아이디" class="loginLine"></input></td>
                    </tr>
                    <tr>
                        <th>PW</th>
                        <td><input id="memberPw" name="memberPw" placeholder="비밀번호" class="loginLine"></input></td>
                    </tr>
                </tbody>
            </table>
            <div class="loginChkBox">
                <button class="loginBtn" onclick="memberAction">로그인</button>
                <button class="findIdBtn" onclick="memberAction">아이디찾기</button>
                <button class="findPwBtn" onclick="memberAction">비밀번호찾기</button>
            </div>
        </div>
    )
}

export default login
