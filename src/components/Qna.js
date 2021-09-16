import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './../css/Qna.css';

function Qna() {
    return (
        <div>
            <div class="contents">
                <div class="subjects">
                    <h1 class="qna">QNA</h1>
                </div>

                <thead class="boardBox">
                    <tr class="Box">
                        <th class="no">No</th>
                        <th class="subject">Subject</th>
                        <th class="name">Name</th>
                        <th class="date">Date</th>
                    </tr>
                </thead>
                <button class="write"><Link to="/write">Write</Link></button>
            </div>
        </div>
    )
}

export default Qna
