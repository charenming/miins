import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './../css/Community.css';

function Community() {
    return (
        <div>
            <div class="contents">
                <div class="subjects">
                    <h1 class="bodyNm">COMMUNITY</h1>
                    <h4 class="bodySubNm">get in touch</h4>
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
        </div>
    )
}

export default Community
