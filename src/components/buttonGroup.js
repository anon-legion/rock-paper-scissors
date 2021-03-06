import React, { useState } from 'react';
import '../App.css';

const ButtonGroup = ({ buttons, clickFunction }) => {
    //takes in one input parameter buttons where button is an object with key value pairs
    const [clickedId, setClickedId] = useState(() => -1);
    const handleClick = (e, id) => {
        if (id === clickedId) {
            setClickedId(prevState => -1);
            clickFunction(e);
        } else {
            setClickedId(prevState => id);
            clickFunction(e);
        }
    }

    return (
        <div className="buttons has-addons is-centered">
            {Object.values(buttons).map((objVal, i) => (
                <button 
                    key={i}
                    data-value={objVal}
                    onClick={(e) => handleClick(e, i)}
                    className={`button has-text-weight-semibold is-size-5-tablet ${i === clickedId ? 'active' : ''}`}
                >
                    {objVal}
                </button>
            ))}
        </div>
    );
};


export default ButtonGroup;