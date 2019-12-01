import React from 'react'
import "./Score.scss"

export default function Score(props) {
    return (
        <div id="score">
            <h1>{props.score}</h1>
        </div>
    )
}
