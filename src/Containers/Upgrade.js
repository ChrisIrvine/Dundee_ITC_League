import React, { Component }  from 'react';
import '../App.css';
import Content from '../Components/Content';
import { Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class upgrade extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="text-bold">Path to Glory Upgrading</h1>
        <Content title="How does Upgrading Work?" content="There are couple kinds of upgrades you can collect for your units 
        over the course of the campaign.
        \n
        The first kind are upgrades that are dictated by XP (Experience Points). Units can gain XP according the rules laid out
        in Vigilus Defiant, also found in Vigilus Defiant are upgrades that can be applied to units in between battles.
        \n
        During battle you may come across caches of Wargear that can be immediately equipped during a battle, 
        these Weapon Upgrades are kept for the remainder of the Campaign. However they can (and XP Upgrades) can be lost when a
        unit is entirely wiped out during a battle.
        \n
        When you collect a Weapons Cache during a battle, roll a D6, to decide what kind of weapon is found, followed by a D6
        to determine what Weapon has been found."/>
        <div className="standard">
          <h3>1. Pistols</h3>
          <Table compact>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>D6</Table.HeaderCell>
                <Table.HeaderCell>Weapon</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>Plasma Pistol</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>Grav Pistol</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>3</Table.Cell>
                <Table.Cell>Hand Flamer</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>4</Table.Cell>
                <Table.Cell>Inferno Pistol (Melta)</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>Poison Pistol</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>6</Table.Cell>
                <Table.Cell>Pick one above, it is now Pistol 2</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
        <div className="standard">
          <h3>2. Melee</h3>
          <Table compact>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>D6</Table.HeaderCell>
                <Table.HeaderCell>Weapon</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>Chainsword</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>Power Sword</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>3</Table.Cell>
                <Table.Cell>Power Axe</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>4</Table.Cell>
                <Table.Cell>Power Maul</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>Lightning Claw (Pair) (does not overwrite model's ranged weapons)</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>6</Table.Cell>
                <Table.Cell>Thunder Hammer (1 handed)</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
        <div className="standard">
          <h3>3. Special</h3>
          <Table compact>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>D6</Table.HeaderCell>
                <Table.HeaderCell>Weapon</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>Storm Bolter</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>Plasma Gun</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>3</Table.Cell>
                <Table.Cell>Meltagun</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>4</Table.Cell>
                <Table.Cell>Flamer</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>Grav-gun</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>6</Table.Cell>
                <Table.Cell>Pick any of the above, is not a combi weapon</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
        <div className="standard">
          <h3>4. Heavy</h3>
          <Table compact>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>D6</Table.HeaderCell>
                <Table.HeaderCell>Weapon</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>Heavy Bolter</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>Grav-Cannon and Amp</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>3</Table.Cell>
                <Table.Cell>Missile Launcher</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>4</Table.Cell>
                <Table.Cell>Lascannon</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>Multi-melta</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>6</Table.Cell>
                <Table.Cell>Heavy Flamer</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
        <div className="standard">
          <h3>5. Wargear</h3>
          <Table compact>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>D6</Table.HeaderCell>
                <Table.HeaderCell>Weapon</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>Jump Pack (provides whole unit with FLY keyword)</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>Terminator Armour (+1 wound, 2+ save and 5++ Invul, if character -1" movement)</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>3</Table.Cell>
                <Table.Cell>Artificer Armour (2+ Save)</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>4</Table.Cell>
                <Table.Cell>Bike (14" movement, +1 Wound, +1 Toughness)</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>Iron Halo (4++ Invul)</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>6</Table.Cell>
                <Table.Cell>Relic (from your opponent's faction relic list, change faction keywords as apporpriate, this may be transferred to a character if you wish)</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
        <Content title="6. Super Cache" content="Aren't you lucky! You found a cache with D3 (min 2) items in it. Roll on this table
        for each item in the cache, rerolling 6's."/>
      </div>
    );
  }
}
    
export default upgrade;
