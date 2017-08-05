import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {generateCardVectors} from '../../actions/game';
import NewGameButton from './buttons/new-game';

class MainScreen extends Component{
  render(){
    return (
        <div className={"main-screen row "+(this.props.game_status == 'PLAYING' ? 'hidden' : 'shown')}>
            <div className="col-xs-12 ">
                <div className="content">
                    <div className="row">
                        <div className="col-xs-6 text-center">
                            <NewGameButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    game_status: state.gameStatus
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({generateCardVectors:generateCardVectors}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(MainScreen);
