import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import PhotoGrid from './PhotoGrid';
import Modal from 'react-modal';

import cat1 from './1.jpg';
import cat2 from './2.jpg';
import cat3 from './3.png';
import cat4 from './4.jpg';
import cat5 from './5.jpg';
import cat6 from './6.jpg';
import cat7 from './7.jpg';
import cat8 from './8.jpg';
import cat9 from './9.jpg';

import { heartClick, modalClose } from './actions';

const customStyles = {
  content : {
    maxWidth: '600px',
    maxHeight: '660px',
    top: '2%',
    left: '30%',
    padding: '0px',
  }
};

class App extends Component {
  render() {
    let catImg;
    let catLikes = 0;
    let catLiked = false;
    switch (this.props.catDisplayed) {
      case 0:
        catImg = cat1;
        catLikes = this.props.catLikes.get(0);
        catLiked = this.props.catLiked.get(0);
        break;
      case 1:
        catImg = cat2;
        catLikes = this.props.catLikes.get(1);
        catLiked = this.props.catLiked.get(1);
        break;
      case 2:
        catImg = cat3;
        catLikes = this.props.catLikes.get(2);
        catLiked = this.props.catLiked.get(2);
        break;
      case 3:
        catImg = cat4;
        catLikes = this.props.catLikes.get(3);
        catLiked = this.props.catLiked.get(3);
        break;
      case 4:
        catImg = cat5;
        catLikes = this.props.catLikes.get(4);
        catLiked = this.props.catLiked.get(4);
        break;
      case 5:
        catImg = cat6;
        catLikes = this.props.catLikes.get(5);
        catLiked = this.props.catLiked.get(5);
        break;
      case 6:
        catImg = cat7;
        catLikes = this.props.catLikes.get(6);
        catLiked = this.props.catLiked.get(6);
        break;
      case 7:
        catImg = cat8;
        catLikes = this.props.catLikes.get(7);
        catLiked = this.props.catLiked.get(7);
        break;
      case 8:
        catImg = cat9;
        catLikes = this.props.catLikes.get(8);
        catLiked = this.props.catLiked.get(8);
        break;
      default:
        break;
    }
    return (
      <div className="App">
          <Modal isOpen={this.props.catDisplayed !== false} style={customStyles} onRequestClose={this.props.onModalClose} contentLabel="Modal">
            <img alt="Big cat" style={{ width: 600, height: 600 }} src={catImg}/>
            <div onClick={this.props.onHeartClick}>
            <p style={{ textAlign: 'center', fontSize: 20, fontWeight: 700, }}>
              <span style={catLiked ? { color: '#a70000' } : null}>❤</span> {catLikes}
            </p>
            </div>
          </Modal>
        <div className="App-header">
          <p className="App-title">🐱 FunnyCatz 🐱</p>
        </div>
        <div>
          <PhotoGrid onClick={this.onRequestModalOpen} catLikes={this.props.catLikes}/>
          <p className="App-footer">Your daily cat supply is provided by qiubit</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    catDisplayed: state.get('app').get('catDisplayed'),
    catLikes: state.get('app').get('catLikes'),
    catLiked: state.get('app').get('catLiked'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onHeartClick: () => {
      dispatch(heartClick())
    },
    onModalClose: () => {
      dispatch(modalClose())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
