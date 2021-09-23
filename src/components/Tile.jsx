import React from 'react';
import '../styles/Tile.scss'
const Tile = (props) => {

    return (
        <div className="tile-container">
            <div className="tile-title">
                {props.title}<span className="cord-icon" ></span>
            </div>
            <div className="tile-body">
                {props.children}
            </div>
            <div className="tile-footer">
                {props.footer}
            </div>
        </div>
    )
}

export default Tile;