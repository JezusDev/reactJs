import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import Modal from "./components/Modal/Modal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
      isModalOpened: false,
      loginedUser: {},
      inContacts: false,
    };
    this.onModalClose = this.onModalClose.bind(this);
    this.onModalOpen = this.onModalOpen.bind(this);
  }

  localStor = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      this.onAuth(user);
    }
  };

  onAuth = (user) => {
    this.setState({ isAuth: true });
    this.setState({ loginedUser: user });
  };

  onLogout = () => {
    localStorage.removeItem("user");
    this.setState({ isAuth: false, loginedUser: null });
    this.logoutContacts();
  };

  onModalClose() {
    this.setState({ isModalOpened: false });
  }

  onModalOpen() {
    this.setState({ isModalOpened: true });
  }

  onContacts = (e) => {
    this.setState({ inContacts: true });
  };

  logoutContacts = () => {
    this.setState({ inContacts: false });
  };

  render() {
    return (
      <div onLoad={this.localStor}>
        <Header
          auth={this.state.isAuth}
          openModal={this.onModalOpen}
          loginedUser={this.state.loginedUser}
          onLogout={this.onLogout}
          onClose={this.onModalClose}
          onContacts={this.onContacts}
        />
        <Main
          auth={this.state.isAuth}
          openModal={this.onModalOpen}
          loginedUser={this.state.loginedUser}
          onLogout={this.onLogout}
          onClose={this.onModalClose}
          onContacts={this.onContacts}
          inContacts={this.state.inContacts}
        />
        {!this.state.isAuth && (
          <Modal
            opened={this.state.isModalOpened}
            onClose={this.onModalClose}
            isAuth={this.state.isAuth}
            loginedUser={this.state.loginedUser}
            onAuth={this.onAuth}
          />
        )}
      </div>
    );
  }
}
export default App;
