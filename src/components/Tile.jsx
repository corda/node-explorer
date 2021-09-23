import React from 'react';
import '../styles/Tile.scss'

const Tile = (props) => {

    return (
        <div className="tile-container">
            <div className="tile-title">
                {props.tileTitle}
            </div>
            <div className="tile-body">
                {props.children}
            </div>
            <div className="tile-footer">
                {props.tileFooter}
            </div>
        </div>
    )
}

export default Tile;