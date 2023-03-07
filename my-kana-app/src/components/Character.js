import React from 'react';
import './Character.css';

const Character = (props) => {

    if (typeof props.kana === 'undefined') {
        return <div className='character character__null'>-</div>;
    }

    return (
        <div className='character'>
            <span className='character__kana'>{props.kana}</span>
            <span className='character__romanji'>{props.romanji}</span>
            <span className='character__sound'>/{props.sound}/</span>
        </div>
    );
}

export default Character;