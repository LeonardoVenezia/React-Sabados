import React from 'react';
import './MiHeader.css'

function MiHeader(props) {
    return (
        <header>
            <h1 className={props.titleClass || 'defaultTitle'} >{props.title}</h1>
        </header>
    )
}

export default MiHeader;
