import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Score from "../components/Score"
import cards from "../data/deck.json"
import Card from "../components/Card"
import logo from "../images/logo.jpg"
import "./Game.scss"
import { shuffle } from "../utils/actions"



export default class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: shuffle(cards),
            flipped: [],
            solved: [],
            score: 0,
            disabled: false,
            dimension: 500,
            highScore: false,
        }
        this.handleClick = this.handleClick.bind(this)
        this.isMatch = this.isMatch.bind(this)
        this.sameCardClicked = this.sameCardClicked.bind(this)
        this.updateScore = this.updateScore.bind(this)
        this.resetCards = this.resetCards.bind(this)
        this.incorrectScore = this.incorrectScore.bind(this)
        this.toggleHighScore = this.toggleHighScore.bind(this)
        this.updatePredicate = this.updatePredicate.bind(this)
    }

    componentDidMount() {
        this.updatePredicate()
        window.addEventListener("resize", this.updatePredicate)
    }

    componentWillUnmount() {
        return () => window.removeEventListener("resize", this.updatePredicate)
    }

    updatePredicate = () => {
        debugger
        this.setState({
            dimension: Math.min(
                document.documentElement.clientWidth,
                document.documentElement.clientHeight,
            ),
        })
    }

    handleClick = (id) => {
        this.white(id)
        this.setState({ disabled: true })
        if (this.state.flipped.length === 0) {
            this.setState({ flipped: [id] })
            this.setState({ disabled: false })
        } else {
            if (this.sameCardClicked(id)) return
            this.setState({ flipped: [this.state.flipped[0], id] })
            if (this.isMatch(id)) {
                this.whiteBackground(id, this.state.flipped[0])
                setTimeout(this.resetCards, 1000)
                this.updateScore()
                this.setState({ solved: [...this.state.solved, this.state.flipped[0], id] })
                if (this.state.solved.length === 14) {
                    setTimeout(() => { this.props.history.push(`/highscores/${this.state.score}`) }, 1000)
                }
            } else {
                this.white(id)
                this.incorrectScore()
                setTimeout(() => { this.blackBackground(id, this.state.flipped[0]) }, 1000)
                setTimeout(this.resetCards, 1000)
            }
        }
    }

    white = (id) => {
        document.getElementById(id).style.background = "white"
    }

    whiteBackground = (id, flippedId) => {
        document.getElementById(id).style.background = "white"
        document.getElementById(flippedId).style.background = "white"
    }

    blackBackground = (id, flippedId) => {
        document.getElementById(id).style.background = "black"
        document.getElementById(flippedId).style.background = "black"
    }

    sameCardClicked = (id) => this.state.flipped.includes(id)

    isMatch = (id) => {
        const clickedCard = this.state.cards.find((card) => card.id === id);
        const flippedCard = this.state.cards.find((card) => this.state.flipped[0] === card.id);
        return flippedCard.type === clickedCard.type;
    }
    updateScore = () => {
        var newScore = this.state.score + 5
        this.setState({ score: newScore })
    }

    incorrectScore = () => {
        var newScore = this.state.score - 1
        this.setState({ score: newScore })
    }

    resetCards = () => {
        this.setState({
            flipped: [],
            disabled: false
        })
    }

    toggleHighScore = () => {
        this.state.highScore ? this.setState({ highScore: false }) : this.setState({ highScore: true })
    }

    render() {
        return (
            <div className="main-container">
                <div className="header">
                    <Link to={'/'}><img src={logo} alt="logo" /></Link>
                    <Score
                        score={this.state.score} />
                    <Link to={`/highscores`}><button className="normal-button">High Scores</button></Link>
                </div>
                <div className="cards-container"
                    style={{
                        width: this.state.dimension,
                        height: this.state.dimension
                    }}>

                    {this.state.cards.map((card) =>
                        <Card
                            style={{ visibility: "visible" }}
                            key={card.id}
                            id={card.id}
                            type={card.type}
                            flipped={this.state.flipped}
                            handleClick={this.handleClick}
                            colorCode={card.colorCode}
                            disabled={this.state.disabled}
                            solved={this.state.solved}
                            width={this.state.dimension * 0.25}
                            height={this.state.dimension * 0.25}
                        />
                    )}
                </div>
            </div >
        )
    }
}