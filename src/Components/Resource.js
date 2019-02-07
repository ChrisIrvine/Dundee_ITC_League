import React from 'react';

const resource = ( props ) => {
    const link = props.link;

    return (
        <div className="right-block background-dim sticky">
            <h4>{props.title}</h4>
            <a rel="noopener noreferrer" className="text-regular" href={link} target="_blank">{props.linkName}</a>
        </div>
    )
}

export default resource;