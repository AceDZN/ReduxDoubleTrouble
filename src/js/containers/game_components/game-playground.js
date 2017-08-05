import React, {Component} from 'react';
import {connect} from 'react-redux';
import {generateCardVectors,updateScore} from '../../actions/game';
import {selectVector} from '../../actions/index';
import {bindActionCreators} from 'redux';

class GamePlayGround extends Component{

    setCircularVectors(items){
        if(!items || items.length<1 )return;

        var itm = items[0];


            if(itm.parentElement && itm.parentElement.parentElement){
                if(itm.parentElement.parentElement.classList.contains("card_border")){
                    itm.parentElement.parentElement.classList.add("rotating");
                }
            }
            this.props.selectVector(this.props.cards.active_card);


        for(var i = 0, l = items.length; i < l; i++) {
            items[i].style.left = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
            items[i].style.top = (50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
        }

        setTimeout(function () {
            itm.parentElement.parentElement.classList.remove("rotating");
        }, 150);

    }

  checkIfVectorWin(e,vector){
    if(!vector) return;
    this.props.updateScore(vector.title == this.props.cards.active_card.title ? 1 : 0);
    if(vector.title == this.props.cards.active_card.title){
        this.props.selectVector(vector);
        this.props.generateCardVectors(this.props.vectors);
    } else {
        if(e.target && e.target.parentElement){
            var el = e.target.parentElement.parentElement;
            if(!!el && el.classList.contains('card_border')){
                el.classList.add('flash-red');
                setTimeout(function () {
                    el.classList.remove('flash-red');
                }, 1000);
                console.log(e.target.parentElement.parentElement);
            }

        }
        console.log(e.target);
    }
  }

  componentDidMount(){
    this.props.generateCardVectors(this.props.vectors);
  }
  componentDidUpdate(){
    if (!this.props.activeVector || this.props.cards.active_card.title !== this.props.activeVector.title){
        var items1 = document.querySelectorAll('.playground div.half-screen:first-child .card_border a');
        var items2 = document.querySelectorAll('.playground div.half-screen:last-child .card_border a');

        if(items1.length<1 || items2.length<1) return;
        this.setCircularVectors(items1);this.setCircularVectors(items2);
    }
  }

  renderCard(data){
    if(!data) return
    return data.vectors.map((vector)=>{
      return (
        <a
          className=""
          onClick={(e)=>this.checkIfVectorWin(e,vector)}
          key={vector.title+'_card_'+data.vectors[2].title}>
          {vector.title}
        </a>
      )
    })
  }
  render(){
      if(this.props.game_status !== 'PLAYING'){return <div></div>}
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
      <div className={"playground row "+(this.props.game_status == 'PLAYING' ? 'shown' : 'hidden')}>
          <div className="col-xs-6 half-screen">
            <div className="card_wrap">
              <div className="card_border">
                <div>
                    {this.props.cards?this.renderCard(this.props.cards.card_1):false}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-6 half-screen">
            <div className="card_wrap">
              <div className="card_border">
                  <div>
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
  return bindActionCreators({updateScore:updateScore,generateCardVectors:generateCardVectors,selectVector:selectVector}, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(GamePlayGround);
