import React from "react";

function Card(props) {
  return (
    <div>
      <li class="card cards__item">
        <div class="card__frame">
          <div class="card__picture">
            <img src={props.image} alt="" width="70"></img>
          </div>
          <h2 class="card__title">{props.title}</h2>
        </div>
        <div class="card__overlay"></div>
        <div class="card__content">
          <p style={{ fontWeight: "600" }}>{props.content}</p>
        </div>
      </li>
    </div>
  );
}

export default Card;
