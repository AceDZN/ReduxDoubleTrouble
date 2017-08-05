import React, {Component} from 'react';
import {connect} from 'react-redux';
import {startNewGame} from '../../../actions/game';
import {bindActionCreators} from 'redux';

class NewGameButton extends Component{
  render(){
    return (
      <div className="btn-wrap">
          <button
            className="btn btn-primary btn-large"
            onClick={()=>this.props.startNewGame(1)}>
                New Game
          </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    game_status: state.gameStatus,
    activeVector: state.activeVector,
    currentScore: state.currentScore,
    vectors: state.vectors
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({startNewGame:startNewGame}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(NewGameButton);
