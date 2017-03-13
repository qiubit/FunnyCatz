import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CatPhoto.css';

class CatPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    }
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseEnter() {
    this.setState({ hovered: true });
  }

  onMouseLeave() {
    this.setState({ hovered: false });
  }

  render() {
    return (
      <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className={this.state.hovered ? "hovered" : ""}>
        {this.state.hovered && <span className="likes">❤ {this.props.likes}</span>}
        <img alt="Funny cat" className={this.state.hovered ? "imgHovered" : ""} src={this.props.img}/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    likes: state.get('app').get('catLikes').get(ownProps.catId),
  }
}

export default connect(mapStateToProps)(CatPhoto);
