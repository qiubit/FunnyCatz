import React, { Component } from 'react';
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
  constructor(props) {
    super(props);
    this.state = {
      catLikes: [100, 423, 7, 731, 72, 752, 0, 0, 0],
      catLiked: [false, false, false, false, false, false, false, false, false],
      catDisplayed: false,
    }
    this.onLikeClick = this.onLikeClick.bind(this);
    this.onRequestModalOpen = this.onRequestModalOpen.bind(this);
    this.onRequestModalClose = this.onRequestModalClose.bind(this);
  }

  onLikeClick(evt) {
    evt.preventDefault();
    if (this.state.catDisplayed !== false) {
      let newCatLiked = this.state.catLiked.slice();
      let newCatLikes = this.state.catLikes.slice();
      newCatLiked[this.state.catDisplayed] = !newCatLiked[this.state.catDisplayed];
      if (newCatLiked[this.state.catDisplayed]) {
        newCatLikes[this.state.catDisplayed] += 1;
      } else {
        newCatLikes[this.state.catDisplayed] -= 1;
      }
      this.setState({ catLiked: newCatLiked, catLikes: newCatLikes });
    }
  }

  onRequestModalOpen(catId) {
    this.setState({ catDisplayed: catId });
  }

  onRequestModalClose() {
    this.setState({ catDisplayed: false });
  }

  render() {
    let catImg;
    let catLikes = 0;
    let catLiked = false;
    switch (this.state.catDisplayed) {
      case 0:
        catImg = cat1;
        catLikes = this.state.catLikes[0];
        catLiked = this.state.catLiked[0];
        break;
      case 1:
        catImg = cat2;
        catLikes = this.state.catLikes[1];
        catLiked = this.state.catLiked[1];
        break;
      case 2:
        catImg = cat3;
        catLikes = this.state.catLikes[2];
        catLiked = this.state.catLiked[2];
        break;
      case 3:
        catImg = cat4;
        catLikes = this.state.catLikes[3];
        catLiked = this.state.catLiked[3];
        break;
      case 4:
        catImg = cat5;
        catLikes = this.state.catLikes[4];
        catLiked = this.state.catLiked[4];
        break;
      case 5:
        catImg = cat6;
        catLikes = this.state.catLikes[5];
        catLiked = this.state.catLiked[5];
        break;
      case 6:
        catImg = cat7;
        catLikes = this.state.catLikes[6];
        catLiked = this.state.catLiked[6];
        break;
      case 7:
        catImg = cat8;
        catLikes = this.state.catLikes[7];
        catLiked = this.state.catLiked[7];
        break;
      case 8:
        catImg = cat9;
        catLikes = this.state.catLikes[8];
        catLiked = this.state.catLiked[8];
        break;
      default:
        break;
    }
    return (
      <div className="App">
          <Modal isOpen={this.state.catDisplayed !== false} style={customStyles} onRequestClose={this.onRequestModalClose}>
            <img alt="Big cat" style={{ width: 600, height: 600 }} src={catImg}/>
            <div onClick={this.onLikeClick}>
            <p style={{ textAlign: 'center', fontSize: 20, fontWeight: 700, }}>
              <span style={catLiked ? { color: '#a70000' } : null}>❤</span> {catLikes}
            </p>
            </div>
          </Modal>
        <div className="App-header">
          <p className="App-title">🐱 FunnyCatz 🐱</p>
        </div>
        <div>
          <PhotoGrid onClick={this.onRequestModalOpen} catLikes={this.state.catLikes}/>
          <p className="App-footer">Your daily cat supply is provided by qiubit</p>
        </div>
      </div>
    );
  }
}

export default App;
