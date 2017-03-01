// Importujemy React
import React, { Component } from 'react';

// Stylowanie
import './App.css';

// Import zewnętrznegoo komponentu zawartego w PhotoGrid.js
import PhotoGrid from './PhotoGrid';
// Import zewnętrzenego komponentu z biblioteki zainstalowanej za pomocą npm
// npm - JSowy package manager
import Modal from 'react-modal';

// Import zdjęć z kotami
import cat1 from './1.jpg';
import cat2 from './2.jpg';
import cat3 from './3.png';
import cat4 from './4.jpg';
import cat5 from './5.jpg';
import cat6 from './6.jpg';
import cat7 from './7.jpg';
import cat8 from './8.jpg';
import cat9 from './9.jpg';

// Stylowanie Modala
const customStyles = {
  content : {
    maxWidth: '600px',
    maxHeight: '660px',
    top: '2%',
    left: '30%',
    padding: '0px',
  }
};

// Główny komponent [odpowiednik funkcji main]
class App extends Component {
  constructor(props) {
    super(props);
    // Stan aplikacji: trzymamy tu lajki dla kotków, które kotki zlajkowaliśmy, i który jest aktualnie pokazywany na
    // Modalu (to ekran który wyświetla się po kliknięciu na zdjęcie)
    this.state = {
      catLikes: [100, 423, 7, 731, 72, 752, 0, 0, 0],
      catLiked: [false, false, false, false, false, false, false, false, false],
      catDisplayed: false,
    }

    // Technikalia - Chcemy żeby funkcje zdefiniowane przez nas miały dostęp do komponentu App przez this
    this.onLikeClick = this.onLikeClick.bind(this);
    this.onRequestModalOpen = this.onRequestModalOpen.bind(this);
    this.onRequestModalClose = this.onRequestModalClose.bind(this);
  }

  // Dodaje lub odejmuje lajka dla danego kotka, odpalana przez PhotoGrid!
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

  // Wyświetla kota na Modalu
  onRequestModalOpen(catId) {
    this.setState({ catDisplayed: catId });
  }

  // Kasuje informacje o wyświetlanym kocie, zamykając Modal
  onRequestModalClose() {
    this.setState({ catDisplayed: false });
  }

  render() {
    let catImg;
    let catLikes = 0;
    let catLiked = false;

    // Ustawia dane podawane do Modala
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

    // Ta dziwna składnia to JSX - Reactowe rozszerzenie składni JS, tak by
    // miejsca, w których opisujemy wygląd UI, wyglądały jak HTML
    return (
      <div className="App">
          {/* Modal jest otwarty tylko gdy this.state.catDisplayed zawiera numer kota */}
          <Modal isOpen={this.state.catDisplayed !== false} style={customStyles} onRequestClose={this.onRequestModalClose}>
            {/* Wyświetla zdjęcie kota w Modalu */}
            <img alt="Big cat" style={{ width: 600, height: 600 }} src={catImg}/>

          {/* Miejsce, w które możemy kliknąć, żeby zlajkować kocura */}
            <div onClick={this.onLikeClick}>
              <p style={{ textAlign: 'center', fontSize: 20, fontWeight: 700, }}>
                <span style={catLiked ? { color: '#a70000' } : null}>❤</span> {catLikes}
              </p>
            </div>

          </Modal>

        {/* Pasek górny */}
        <div className="App-header">
          <p className="App-title">🐱 FunnyCatz 🐱</p>
        </div>

        <div>
          {/* PhotoGrid - dostaje liczbę lajków od App jako prop catLikes */}
          <PhotoGrid onClick={this.onRequestModalOpen} catLikes={this.state.catLikes}/>
          <p className="App-footer">Your daily cat supply is provided by qiubit</p>
        </div>
      </div>
    );
  }
}

export default App;
