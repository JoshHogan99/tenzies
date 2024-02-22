import React from "react"

export default function Scoreboard(props){
    return(
        <div className="scoreboard">
            <h4>Current best time: {props.besttime} sec</h4>
            <div>
                <p>Current rolls: {props.rolls}</p>
                <p>Current time: {props.timer} sec</p>
            </div>
        </div>
    )
}