import React, {Component} from 'react';
import {connect} from 'react-redux';

class GreetMessage extends Component{
  render(){
    var greet = "Hello ______!";
    if(this.props.vector){
      greet = "Hello "+this.props.vector.title+"!";
    }
    return (
      <h1 className="greet-message">
        {greet}
      </h1>
    )
  }

}
function mapStateToProps(state) {
  return {
    vector: state.activeVector
  }
}

export default connect(mapStateToProps)(GreetMessage);
