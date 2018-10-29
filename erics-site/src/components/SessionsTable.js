import React from "react";

const SessionTable = (props) => (
    <table style={{marginTop: "30px"}}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Level</th>
                <th>Number of Participants</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
            {props.sessions.data.map(session => <tr>
                <td>{session.session_name}</td>
                <td>{session.session_level}</td>
                <td>{session.Number_of_Athletes}</td>
                <td>{session.date}</td>
            </tr>)}
        </tbody>
    </table>
)
export default SessionTable