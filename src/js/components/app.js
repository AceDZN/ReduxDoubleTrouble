import React,{ Component } from 'react';
import ForkBanner from './fork-banner';
import VectorList from '../containers/vector-list';
import GamePlayGround from '../containers/game_components/game-playground';

export default class App extends Component {

  render() {
    return (
      <div>
        <ForkBanner url="https://github.com/AceDZN/ReduxDoubleTrouble" />
        <GamePlayGround />
        <VectorList />
      </div>
    );
  }
}
