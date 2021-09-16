import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './../css/Reset.css';
import './../css/Write.css';


function Write(){
    return (
        <div class="contents">
            <h2 class="writeNm">Write</h2>
            <h4 class="subNm">예쁘고 고운 말로 작성해주세요.</h4>
            <table class="tdLeft">
                <cols>
                    <col />
                    <col />
                </cols>
                <tbody>
                    <tr>
                        <th>name</th>
                        <td><input type="text" name="userNmae" placeholder="이름을 작성하세요" class="line"></input></td>
                    </tr>
                    <tr>
                        <th>email</th>
                        <td><input type="text" name="email" placeholder="메일을 작성하세요" class="line"></input></td>
                    </tr>
                    <tr>
                        <th>subject</th>
                        <td><input type="text" name="subject" placeholder="제목을 작성하세요" class="line"></input></td>
                    </tr>
                    <tr>
                        <th>password</th>
                        <td><input type="password" name="password" placeholder="비밀번호를 작성하세요" class="line"></input></td>
                    </tr>
                    <tr>
                        <th>contents</th>
                        <td><textarea rows="" cols="" name="contents" placeholder="내용을 작성하세요" class="line2"></textarea></td>
                    </tr>
                </tbody>
            </table>
            <div class="btns">
                <input type="submit" value="확인" class="submit"></input>
                <input type="button" value="취소" class="cancel"></input>
            </div>
        </div>
    )
}

export default Write