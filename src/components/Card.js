import React from 'react'

import "./Card.scss"

export default function Card({ handleClick, id, flipped, colorCode, disabled }) {
    return (
        <div
            className={`flip-container ${flipped.includes(id) ? 'flipped' : ""}`}
            onClick={() => disabled ? null : handleClick(id)}
            style={{ background: "black" }}
            id={`${id}`}
        >
            <div className="flipper">
                <div className={flipped.includes(id) ? "front" : "back"}
                    style={{ background: `${colorCode}` }
                    }>
                </div>
            </div>

        </div >
    )
}
