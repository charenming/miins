import React from "react";
import { Route, Switch } from "react-router-dom";
import "./../css/Reset.css";
import "./../css/Login.css";

function login() {
  return (
    <div className="contents">
      <div className="subjects">
        <h1 className="bodyNm">LOGIN</h1>
        <h4 className="bodySubNm"> </h4>
      </div>
      <table className="tdLeft">
        <cols>
          <col />
          <col />
        </cols>
        <tbody>
          <tr>
            <th>ID</th>
            <td>
              <input
                id="memberId"
                name="memberId"
                placeholder="아이디"
                className="loginLine"
              ></input>
            </td>
          </tr>
          <tr>
            <th>PW</th>
            <td>
              <input
                id="memberPw"
                name="memberPw"
                placeholder="비밀번호"
                className="loginLine"
              ></input>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="loginChkBox">
        <button className="loginBtn">로그인</button>
        <button className="findIdBtn">아이디찾기</button>
        <button className="findPwBtn">비밀번호찾기</button>
      </div>
    </div>
  );
}

export default login;
