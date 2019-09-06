import React, { Component }  from 'react';
import '../App.css';
import Content from '../Components/Content';

class rules extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <h1 className="text-bold">Path to Glory Rules</h1>
          <Content title="On this page..." content="This is a quick reference guide to the rules of the Campaign, we won't be 
          including the standard rules for 40k, as we assume that the players know them. Instead we will focus on the Campaign 
          specific rules. "/>
          <Content title="Starting your Army" content="To start your army, use the tables that John has written up for us. Choose your
          faction. You will be told what character you will be warlord at the start (for example - Adeptus Astartes use a Captain as 
          their warlord). Next, depending on your faction, you will do the following 3 or more times:
          \n
          Firstly roll a D6 to decide which of your factions UNIT TABLES you will generate a unit from. Then roll a D6 to decide which
          unit is generated.
          \n
          All factions generate 3 units unless they are Imperial Guard.
          \n
          All armies are treated as Battleforged, and you are more than welcome to create detatchments within the army if you have the 
          units to do so. However, Vigilus Detatchments can only be utilised when you have a Detatchment formed within your army.
          \n
          Note: Unit sizes are determined what can be bought in a single box, this was done to reduce the amount you need to purchase,
          if any, over the course of the campaign."/>
          <Content title="Gathering Forces" content="After EVERY BATTLE you fight, you will generate 1 new unit. That means in round where
          you fight either MULTIPLE BATTLES or MULTIPLE ARMIES (in a single battle) you will generate more than 1 new unit. For example; 
          if you fight 2 battles or a single battle with 2 opponents (1 vs 1 vs 1) you will generate 2 new units."/>
          <Content title="Upgrading your Soldiers (or bugs)"content="We will be using the Chapter Approved 2018 rules for unit 
          experience in this campaign. Pages 20-25. Please refer to those pages for all details concerning gaining XP and benefiting
          from the points you have gathered."/>
          <Content title="In Game" content="Follow all mission rules, unless otherwise stated on the Facebook group. Everyone will play the
          same mission. We will do our best to avoid penalising armies that lack certain unit types."/>
          <Content title="Missions" content="The missions for each round will be posted here and on the Facebook group. As previously
          stated, the rules may be altered to prevent some armies having an unfair advantage over other armies. 
          \n
          All missions will use Narrative play rules, meaning that strategems can be use multiple times during a phase. Psychic powers can 
          be cast multiple times in a turn, but the +1 to Cast from Smite rule is in place, even for armies like Grey Knights or 
          Thousand Sons (apart from Smite)."/>
          <Content title="Achieving Victory" content="At the end of each game you have the chance to gain some Campaign Points (not 
          anagramed to CP for obvious reasons). In games where you have more than one opponent, the player who comes First gets 2 Campaign
          Points, the player who comes Second gets 1 Campaign point, and the player who comes Third gets 0 Campaign points.
          \n
          In regular games, the winner gets 2 Campaign Points and the looser gets 1 Campaign Points.
          \n
          This campaign style is a race to victory. The first two players to accumulate 10 Campaign Points (this may increase should the 
          campaign wrap up too soon) will be declared Warmaster. The next two players to reach the 10 Campaign Point goal will be declared
          their Lieutenants (3rd placed joins the 2nd place player, 4th placed joins 1st placed). Finally the 3rd pairing of players will
          join an army of their choosing. These two armies will face off in the Apocalypse..."/>
          <Content title="The Apocalypse" content="The top 6 players from the Campaign will face off against each other in an Apocalpyse
          style game. Rules, location and date are TBD. However ... last army standing wins. "/>
          <Content title="Balancing" content="You will have three weeks to play each round. Arrange games with you opponent as suits both
          of you. Should you opponent not turn up within those three weeks, you will gain the 2 Campaign Points and they shall recieve 
          no points. Repeat offenders will have their warlord loose XP points as if they died in battle. Should you be unable to take part
          please contact one of the Campaign Administrators (Christopher Irvine or John McCartney).
          \n
          This section will expand over the course of the Campaign as balancing issues arise. Should you have a suggestion please get in
          touch with a Campaign Administrator."/>
        </div>
      </div>
    );
  }
}

export default rules;
