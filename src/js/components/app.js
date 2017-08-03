import React,{ Component } from 'react';
import ForkBanner from './fork-banner';
import VectorList from '../containers/vector-list';
import GreetMessage from '../containers/greet-message';
import GamePlayCard from '../containers/game_components/game-play-card';

export default class App extends Component {

  render() {
    return (
      <div>
        <ForkBanner url="https://github.com/AceDZN/ReduxDoubleTrouble" />
        <GreetMessage />

        <GamePlayCard />

        
      </div>
    );
  }
}
