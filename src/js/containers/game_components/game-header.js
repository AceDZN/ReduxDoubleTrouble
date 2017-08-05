import React, {Component} from 'react';
import {connect} from 'react-redux';
import {generateCardVectors} from '../../actions/game';
import {bindActionCreators} from 'redux';

class GameHeader extends Component{
  render(){
    return (
      <div className={"game_header row "+(this.props.game_status == 'PLAYING' ? 'shown' : 'hidden')}>
          <div className="col-sm-3">
            <button
              className="btn btn-primary"
              onClick={()=>this.props.generateCardVectors(this.props.vectors)}>
              Flip Cards
            </button>
          </div>
          <div className="col-sm-9 text-center">
            <h2>{this.props.activeVector ? this.props.activeVector.title : ''} /{this.props.currentScore}</h2>
          </div>
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
  return bindActionCreators({generateCardVectors:generateCardVectors}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(GameHeader);
