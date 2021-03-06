import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button
        className={this.props.colored ? `sign-in sign-in_colored` : `sign-in`}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
