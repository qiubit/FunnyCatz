import React, { Component } from 'react';
import { connect } from 'react-redux';
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

import { photoClick } from './actions';

class PhotoGrid extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="Grid">
          <div className="row">
            <div className="col-xs-4" onClick={this.props.onPhotoClick(0)}>
              <CatPhoto catId={0} img={cat1}/>
            </div>
            <div className="col-xs-4" onClick={this.props.onPhotoClick(1)}>
              <CatPhoto catId={1} img={cat2}/>
            </div>
            <div className="col-xs-4" onClick={this.props.onPhotoClick(2)}>
              <CatPhoto catId={2} img={cat3}/>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-4" onClick={this.props.onPhotoClick(3)}>
              <CatPhoto catId={3} img={cat4}/>
            </div>
            <div className="col-xs-4" onClick={this.props.onPhotoClick(4)}>
              <CatPhoto catId={4} img={cat5}/>
            </div>
            <div className="col-xs-4" onClick={this.props.onPhotoClick(5)}>
              <CatPhoto catId={5} img={cat6}/>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-4" onClick={this.props.onPhotoClick(6)}>
              <CatPhoto catId={6} img={cat7}/>
            </div>
            <div className="col-xs-4" onClick={this.props.onPhotoClick(7)}>
              <CatPhoto catId={7} img={cat8}/>
            </div>
            <div className="col-xs-4" onClick={this.props.onPhotoClick(8)}>
              <CatPhoto catId={8} img={cat9}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPhotoClick: (catId) => () => {
      dispatch(photoClick(catId))
    },
  }
}

export default connect(null, mapDispatchToProps)(PhotoGrid);
