import React, { Component } from 'react';
import './PhotoGrid.css';

import cat1 from './1.jpg';
import cat2 from './2.jpg';
import cat3 from './3.png';
import cat4 from './4.jpg';
import cat5 from './5.jpg';
import cat6 from './6.jpg';
import cat7 from './7.jpg';
import cat8 from './8.jpg';
import cat9 from './9.jpg';

import CatPhoto from './CatPhoto';

class PhotoGrid extends Component {
  constructor(props) {
    super(props);
    this.onPhotoClick = this.onPhotoClick.bind(this);
  }

  // Ta funkcja ustawia stan komponentu App, mimo że bezpośrednio nie ma do niego dostępu!
  // Typ: Int -> Void -> Void, bo onClick wymaga referencji do funkcji Void -> Void
  onPhotoClick(id) {
    var passClick = function() {
      // To jest funkcja, którą komponent App podał do komponentu PhotoGrid
      this.props.onClick(id);
    }
    passClick = passClick.bind(this);
    return passClick;
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="Grid">
          <div className="row">
            <div className="col-xs-4" onClick={this.onPhotoClick(0)}>
              <CatPhoto likes={this.props.catLikes[0]} img={cat1}/>
            </div>
            <div className="col-xs-4" onClick={this.onPhotoClick(1)}>
              <CatPhoto likes={this.props.catLikes[1]} img={cat2}/>
            </div>
            <div className="col-xs-4" onClick={this.onPhotoClick(2)}>
              <CatPhoto likes={this.props.catLikes[2]} img={cat3}/>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-4" onClick={this.onPhotoClick(3)}>
              <CatPhoto likes={this.props.catLikes[3]} img={cat4}/>
            </div>
            <div className="col-xs-4" onClick={this.onPhotoClick(4)}>
              <CatPhoto likes={this.props.catLikes[4]} img={cat5}/>
            </div>
            <div className="col-xs-4" onClick={this.onPhotoClick(5)}>
              <CatPhoto likes={this.props.catLikes[5]} img={cat6}/>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-4" onClick={this.onPhotoClick(6)}>
              <CatPhoto likes={this.props.catLikes[6]} img={cat7}/>
            </div>
            <div className="col-xs-4" onClick={this.onPhotoClick(7)}>
              <CatPhoto likes={this.props.catLikes[7]} img={cat8}/>
            </div>
            <div className="col-xs-4" onClick={this.onPhotoClick(8)}>
              <CatPhoto likes={this.props.catLikes[8]} img={cat9}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoGrid;
