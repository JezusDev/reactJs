import React from "react";
import Button from "../UI/Button";
import Contacts from "../UI/Contacts";
import Cards from "./Cards";

class Main extends React.Component {
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
    const inContacts = this.props.inContacts;
    const contacts = <h1 className="main__title">Контакты</h1>;
    return (
      <main className="main">
        {!inContacts ? (
          <div className="main__head">
            <h1 className="main__title">
              {auth
                ? `Привет, ${this.props.loginedUser.name}`
                : "Место для получения медицинской помощи"}
            </h1>
            <div className="nav main__nav">
              <Button colored onClick={this.handleClick}>
                {auth ? "Выйти из аккаунта" : "Войти"}
              </Button>
              <Contacts colored onClick={this.handleContactClick}>
                {auth ? "Перейти в контакты" : "Контакты"}
              </Contacts>
            </div>
          </div>
        ) : (
          <div className="main__head">{contacts}</div>
        )}
        {auth ? null : <Cards />}
      </main>
    );
  }
}

export default Main;
