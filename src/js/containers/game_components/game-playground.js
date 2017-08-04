import React, {Component} from 'react';
import {connect} from 'react-redux';
import {generateCardVectors} from '../../actions/cards';
import {bindActionCreators} from 'redux';

class GamePlayGround extends Component{

  setCircularVectors(items){
    for(var i = 0, l = items.length; i < l; i++) {
      items[i].style.left = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
      items[i].style.top = (50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
    }
  }
  componentDidMount(){
    this.props.generateCardVectors(this.props.vectors);

  }
  componentDidUpdate(){
    var items1 = document.querySelectorAll('.playground>div.col-md-6:first-child .card_border a');
    var items2 = document.querySelectorAll('.playground>div.col-md-6:last-child .card_border a');
    this.setCircularVectors(items1);this.setCircularVectors(items2);
  }

  renderCard(data){
    if(!data) return
    return data.vectors.map((vector)=>{
      return (
        <a
          className=""
          key={vector.title+'_card'}>
          {vector.title}
        </a>
      )
    })
  }
  render(){
    var card1 = "no vectors in card1";
    var card2 = "no vectors in card2";
    var active_card = 'no active card';
    if(this.props.card1Vectors)
      card1 = "card1 "+this.props.card1Vectors[0].title+"!";

    if(this.props.card2Vectors)
      card2 = "card1 "+this.props.card2Vectors[0].title+"!";


    if(this.props.activeVector){
      active_card = 'active card >'+this.props.activeVector.title;
    }
    var game_status = '';
    if(this.props.game_status){
      game_status = this.props.game_status;
    }

    return (
      <div className="playground row">
          <div className="col-md-6">
            <div className="card_wrap">
              <div className="card_border"><div>
                {this.props.cards?this.renderCard(this.props.cards.card_1):false}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card_wrap">
              <div className="card_border"><div>
                {this.props.cards?this.renderCard(this.props.cards.card_2):false}
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
    game_status: state.gameStatus,
    cards: state.cards,
    activeVector: state.activeVector,
    vectors: state.vectors
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({generateCardVectors:generateCardVectors}, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(GamePlayGround);
