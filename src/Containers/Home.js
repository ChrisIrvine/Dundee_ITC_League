import React, { Component }  from 'react';
import '../App.css';
import Content from '../Components/Content';

class home extends Component {
  render() {
    return (
      <div>
        <h1 className="text-bold">Dundee Wargames Path to Glory Campaign</h1>
            <Content content="Path to Glory is a Progressive Campaign where each Player starts with a small army 
            that grows and gathers in strength over the course of many battles. Players are limited to a single codex but this
            may be broken in certain cases to represent entities that would never be able to make it on their own - such as Imperial
            Agents. Path to Glory has a Race to Victory win condition. The first two players to reach 10 Victory Points will face
            off in one last battle, with the second two Players serving as their Lieutenants. The other players will be divided
            between these two forces (chosen by a blind draw) in a single Apocalypse style game. The Victors of 
            this game will be crowned as the Champions of Path to Glory. This means that even if you are dead last on the
            leaderboard you will have the chance to be part of the winning team." 
            title="What is Path to Glory?"/>
            <Content content="This Website will serve as your guide for everything you need to know over the course the Campaign.
            There will be a full copy of the rules, unit generation lists and unit upgrades lists here. For copywrite reasons 
            we cannot show any GamesWorkshop material such as content from the Vigilus Defiant book (this Campaign does use 
            some elements from that book, these are clearly marked). You will also find a full list of the Armies and Players 
            taking part in this Campaign as well as their position on the leaderboard. If you have any questions please contact the
            organisers of this Campaign: John McCartney, Chris Irvine, Gavin Laffoley and Dave Murray." 
            title="On this Website..."/>
      </div>
    );
  }
}   

export default home;
