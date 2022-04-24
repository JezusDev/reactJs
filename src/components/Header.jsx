import React from "react";
import logo from "../img/logo.svg";
import Button from "./UI/Button";
import Contacts from "./UI/Contacts";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = () => {
      this.props.openModal();
    };
  }
  handleClick = (e) => {
    e.preventDefault();
    const auth = this.props.auth;
    if (!auth) {
      this.openModal();
    } else {
      this.props.onClose();
      this.props.onLogout();
    }
  };
  handleContactClick = (e) => {
    e.preventDefault();
    const auth = this.props.auth;
    if (!auth) {
      return false;
    } else {
      this.props.onContacts();
    }
  };
  render() {
    const auth = this.props.auth;
    return (
      <header className="header">
        <div className="header__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav">
          <Contacts onClick={this.handleContactClick}>Контакты</Contacts>
          <Button onClick={this.handleClick}>{auth ? "Выйти" : "Войти"}</Button>
        </div>
      </header>
    );
  }
}

export default Header;
