import React from "react";
import Card from "./Card";
import online from "../../img/online.svg";
import extra from "../../img/emergency.svg";
import cancer from "../../img/cancer.svg";

class Cards extends React.Component {
  render() {
    return (
      <div className="main__cards">
        <Card
          src={online}
          alt="online"
          title="Онлайн-прием"
          text="Рыба текст"
        />
        <Card
          src={extra}
          alt="extra"
          title="Экстренный случай"
          text="Рыба текст"
        />
        <Card
          src={cancer}
          alt="cancer"
          title="Лечение рака"
          text="Рыба текст"
        />
      </div>
    );
  }
}

export default Cards;
