import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./HighScores.scss"
import Leaders from "../components/Leaders"
import { getScore, setScore } from '../utils/actions'
import logo from "../images/logo.png"

export default class HighScores extends Component {
    constructor(props) {
        super(props)
        this.state = {
            score: 0,
            highScores: [],
            playerName: "",
            leaderBoard: getScore(),
            isScore: false,
            highScore: false,
        }
        this.submitHandler = this.submitHandler.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
    }
    componentDidMount() {
        var newScore = this.props.match.params.score
        if (newScore === undefined) {
            this.setState({ isScore: false })
        } else {
            this.setState({ isScore: true })
            this.setState({ score: newScore })
            if (this.state.leaderBoard === null) {
                this.setState({ highScore: true })
            } else if (newScore > Number(this.state.leaderBoard[0].score)) {
                this.setState({ highScore: true })
            }
        }
    }

    submitHandler = (event) => {
        event.preventDefault();

        setScore(this.state.playerName, this.state.score)
        this.props.history.push("/highscores")

    }

    changeHandler = (e) => {
        this.setState({ playerName: e.target.value })
    }


    render() {
        return (
            <>
                <Link to={'/'}><img src={logo} alt="logo" /></Link>
                {this.state.isScore ?
                    <>
                        {this.state.highScore ?
                            <>
                                <div className="high-score">
                                    <h1>Game Over</h1>
                                    <h2>Your score: {this.state.score}</h2>
                                    <h3>Congratulations - You beat the highest score!</h3>
                                    <p>Enter your name to be in our leaderboard</p>
                                    <form onSubmit={this.submitHandler}>
                                        <div className="input-container">
                                            <input required type="text" id="playerName" name="playerName" pattern="[a-zA-Z]*" placeholder="Your Name" value={this.state.playerName} onChange={(e) => this.changeHandler(e)} />
                                            <button className="submit-btn" type="submit" value="submit">Submit</button>
                                        </div>
                                    </form>
                                    <Link to={`/game`}><button className="normal-button">Restart</button></Link>
                                </div>
                            </> :
                            <>
                                <div className="high-score">
                                    <h1>Game Over</h1>
                                    <h2>Your score: {this.state.score}</h2>
                                    <Leaders
                                        leaders={this.state.leaderBoard} />
                                    <Link to={`/game`}><button className="normal-button">Restart</button></Link>
                                </div>
                            </>}
                    </> :
                    <>
                        {this.state.leaderBoard ?
                            <>
                                <div className="high-score">
                                    <h1>High Scores</h1>
                                    <Leaders
                                        leaders={this.state.leaderBoard} />
                                    <Link to={`/game`}><button className="normal-button">Restart</button></Link>
                                </div>
                            </> :
                            <>
                                <div className="high-score">
                                    <h1>No Scores Yet</h1>
                                    <Link to={`/game`}><button className="normal-button">Restart</button></Link>
                                </div>
                            </>}
                    </>}
            </>

        )
    }
}
