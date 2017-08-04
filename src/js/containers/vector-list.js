import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectVector} from '../actions/index';
import {bindActionCreators} from 'redux';

class VectorsList extends Component {
  renderList(){
    return this.props.vectors.map((vector)=>{
      return (
        <li
          className="list-group-item"
          key={vector.title}
          onClick={()=>this.props.selectVector(vector)}>
          {vector.title}
        </li>
      )
    })
  }
  render(){
    return (
      <ul className="list-group active_vectors_bar">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    vectors: state.vectors
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectVector:selectVector}, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(VectorsList);
