import React from "react";

const Table=(props) =>(
    <table>
        <thead>
            <tr>
        <th>Name</th>
        <th>Sets</th>
        <th>Reps</th>
        <th>Level</th>
        </tr>
        </thead>
        <tbody>
        {props.workouts.map(workout=><tr>
            <td>{workout.workout_name}</td>
            <td>{workout.workout_sets}</td>
            <td>{workout.workout_reps}</td>
            <td>{workout.workout_level}</td>
        </tr>)}
        </tbody>
    </table>
)
export default Table