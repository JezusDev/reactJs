import React from "react";

class Contacts extends React.Component {
  render() {
    return (
      <a
        onClick={this.props.onClick}
        href="#"
        className={
          this.props.colored ? `contacts contacts_colored` : `contacts`
        }
      >
        {this.props.children}
      </a>
    );
  }
}
export default Contacts;
