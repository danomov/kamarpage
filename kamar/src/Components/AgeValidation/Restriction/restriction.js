import React from 'react';
import './restriction.css';

export default function Restriction(props) {
    return (
        <div className='restriction'>
            <p>You are not old enough to enter this website</p>
            <button className='backBtn' onClick={props.onRedirect}>BACK</button>
        </div>
    )
}
