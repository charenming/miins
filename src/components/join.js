import React from "react";
import "./../css/Reset.css";
import "./../css/Join.css";

function Join() {
  return (
    <div className="contents">
      <div className="subjects">
        <h1 className="bodyNm">JOIN</h1>
        <h4 className="bodySubNm"> </h4>
      </div>

      <table className="tdLeft">
        <cols>
          <col />
          <col />
        </cols>
        <tbody>
          <tr>
            <th>아이디</th>
            <td>
              <input type="text" name="memberId1" className="joinLine"></input>
            </td>
          </tr>
          <tr>
            <th>비밀번호</th>
            <td>
              <input
                type="password"
                name="memberPw1"
                className="joinLine"
              ></input>
            </td>
          </tr>
          <tr>
            <th>비밀번호확인</th>
            <td>
              <input
                type="password"
                name="memberPw2"
                className="joinLine"
              ></input>
            </td>
          </tr>
          <tr>
            <th>이름</th>
            <td>
              <input type="text" name="memberName" className="joinLine"></input>
            </td>
          </tr>
          <tr>
            <th>주소</th>
            <td>
              <div className="adress">
                <input
                  type="text"
                  className="addressNumber"
                  placeholder="우편번호"
                ></input>
                <input
                  type="button"
                  name="addressBtn"
                  value="우편번호"
                  className="addressBtn"
                ></input>
              </div>
              <div className="adress2">
                <input
                  type="text"
                  name="address1"
                  className="address1"
                  placeholder="기본주소"
                ></input>
                <input
                  type="text"
                  name="address2"
                  className="address2"
                  placeholder="나머지주소"
                ></input>
              </div>
            </td>
          </tr>
          <tr>
            <th>휴대전화</th>
            <td>
              <select name="phoneNumber" className="phLine">
                <option value="010">010</option>
              </select>
              <input type="text" name="phoneMidN" className="phLine"></input>
              <input type="text" name="phoneLastN" className="phLine"></input>
            </td>
          </tr>
          <tr>
            <th>이메일</th>
            <td>
              <input type="text" name="userEmail" className="joinLine"></input>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="joinChkBox">
        <button className="joinBtn">회원가입</button>
      </div>
    </div>
  );
}

export default Join;
