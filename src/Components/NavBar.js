import React from 'react';

const navbar = () => {
    return (
        <ul className="navbar background-dim">
            <li href="/" >Home</li>
            <li href="/rules" >Rules</li>
            <li href="/armies" >Armies</li>
            <li href="/leaderboard" >Leaderboard</li>
            <li href="/matches" >Matches</li>
            <li href="/recruit" >Recruit</li>
        </ul>
    )
}

export default navbar;