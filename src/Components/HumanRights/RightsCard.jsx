import React from "react";
import { Image } from "react-bootstrap";
import './card.css'

export default function RightsCard({ card }) {
  return (
    <div class="card cards__item">
      <div class="card__frame">
        <div class="card__picture">
          <Image
            src={card.img}
            alt=""
            width="100"
          />
        </div>
        <h2 class="card__title">{card.heading}</h2>
      </div>
      <div class="card__overlay"></div>
      <div class="card__content">
        <h2>{card.heading}</h2>
        <p>
          {card.details}
        </p>
      </div>
    </div>
  );
}
