import React from 'react'
import logo from "../images/logo.png"
import { Link } from "react-router-dom"
import "./Home.scss"

export default function Home() {
    return (
        <div className="Home">
            <img src={logo} alt="logo" />
            <h1>Colour Memory</h1>
            <ul>
                <li>Flip 2 cards each round to find a match</li>
                <li>Receive 5 points if flipped pair is a match</li>
                <li>Lose 1 point if flipped pair is not a match</li>
                <li>Win the most points to enter our leaderboad!</li>
            </ul>

            <Link to={`/game`}><button className="normal-button">Start Game</button></Link>
        </div>
    )
}
