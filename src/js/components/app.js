import React,{ Component } from 'react';
import ForkBanner from './fork-banner';
import VectorList from '../containers/vector-list';
import GamePlayGround from '../containers/game_components/game-playground';
import GameHeader from '../containers/game_components/game-header';

export default class App extends Component {

  render() {
    return (
      <div>
        <ForkBanner url="https://github.com/AceDZN/ReduxDoubleTrouble" />
        <GameHeader />
        <GamePlayGround />
        <VectorList />
      </div>
    );
  }
}
