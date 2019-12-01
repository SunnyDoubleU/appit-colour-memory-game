import React, { Component } from 'react'

export default class Leaders extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (

            <div className="table-container">
                <table>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                    {this.props.leaders.map((leader, index) =>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{leader.name}</td>
                            <td className="leader-score">{leader.score}</td>
                        </tr>
                    )}
                </table>
            </div>

        )
    }
}
