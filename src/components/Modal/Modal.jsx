import React from "react";
// import database from "../../users.json";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      validate: "none",
      message: "",
    };
    this.handleClick = this.handleClick.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.compareUsers = this.compareUsers.bind(this);
  }

  handleChangeLogin(e) {
    this.setState({ login: e.target.value });
  }
  handleChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  handleClick(e) {
    this.props.onClose();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    if (!this.validateForm()) {
      return false;
    }
    const data = {
      login: this.state.login,
      password: this.state.password,
    };

    const users = await this.request();

    const loginedUser = this.compareUsers(data, users);

    if (!loginedUser) {
      this.setState({ validate: "validate-message" });
      this.setState({ message: "Такого пользователя не существует" });
      return null;
    }
    localStorage.setItem("user", JSON.stringify(loginedUser));
    const userData = JSON.parse(localStorage.getItem("user"));
    this.setState({ login: "", password: "" });
    this.props.onAuth(userData);
  };

  request = async () => {
    const req = await fetch("users.json").then((data) => data.json());

    return await req.users;
  };

  validateForm() {
    if (this.state.password.length < 8) {
      this.setState({ validate: "validate-message" });
      this.setState({ message: "Слишком короткий пароль" });
      return false;
    }
    if (
      this.state.login.match(/^(?=.*[!@#$%^&(),.+=/\/\]\[{}?><":;|])/g) ||
      this.state.password.match(/^(?=.*[!@#$%^&(),.+=/\/\]\[{}?><":;|])/g)
    ) {
      this.setState({ validate: "validate-message" });
      this.setState({ message: "Вы ввели запрещенные символы" });
      return false;
    }
    this.setState({ validate: "none" });
    this.setState({ message: "" });
    return true;
  }

  compareUsers(data, users) {
    for (let i = 0; i < users.length; i++) {
      if (
        data.login === users[i].login &&
        data.password === users[i].password
      ) {
        return users[i];
      }
    }
    return false;
  }

  render() {
    return (
      <div
        id="openModal"
        className={this.props.opened ? "modal" : "modal hide"}
      >
        <div className="modal__dialog">
          <div className="modal__content">
            <div className="modal__header">
              <h3 className="modal__title">Вход в систему</h3>
              <a
                href="#close"
                title="Close"
                className="modal__close"
                onClick={this.handleClick}
              >
                ×
              </a>
            </div>
            <div className="modal__body">
              <form
                className="sign-in-form"
                name="sign"
                action="#"
                id="sign"
                onSubmit={this.handleSubmit}
              >
                <div className={this.state.validate}>{this.state.message}</div>
                <label htmlFor="login">
                  <input
                    required
                    type="text"
                    name="login"
                    id="login"
                    placeholder="Логин"
                    value={this.state.login}
                    onChange={this.handleChangeLogin}
                  />
                </label>
                <label htmlFor="password">
                  <input
                    required
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Пароль"
                    value={this.state.password}
                    onChange={this.handleChangePassword}
                  />
                </label>

                <button type="submit" className="sign-in-form__submit">
                  Войти
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
