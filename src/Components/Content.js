import React from 'react';

const content = ( props ) => {
    return (
        <div className="standard">
            {props.title ? <h2>{props.title}</h2> : null}
            {props.content.split('\\n').map((text, i) => (
                <p key={i}>{text}</p>
            ))}
        </div>
    )
}

export default content; 