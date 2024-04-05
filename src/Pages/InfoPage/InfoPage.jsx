import React from "react";
import "./InfoPage.scss";
import mockup from "../../assets/images/mockup.png";

export default function InfoPage() {
  return (
    <main className="info">
      <img src={mockup} alt="" className="info__image" />
      <a
        className="info__btn"
        target="_blank"
        href="https://octopus.energy/octopus-home-mini-faq/"
      >
        <button className="info__button">Read More</button>
      </a>
    </main>
  );
}
