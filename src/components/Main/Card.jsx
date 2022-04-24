import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="main__card">
        <div className="main__card-img">
          <img src={this.props.src} alt={this.props.alt} />
        </div>
        <div className="main__card-descr">
          <h3 className="main__card-title">{this.props.title}</h3>
          <p className="main__card-text">{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Card;
