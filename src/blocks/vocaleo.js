import React from "react";
import vocaleoCart from "../images/vocaleo/cart.webp";
import vocaleoHome from "../images/vocaleo/home.webp";
import vocaleoConfigurate from "../images/vocaleo/configurate.webp";
import Mockup from "../components/Mockup";
import Carousel from "../components/Carousel";

export default function VocaleoExperience() {
  const description = (
    <div className="description column is-two-thirds">
      <p className="title">Vocaléo ~ CTO ~ 40 work days</p>
      <p>
        <i>Vocaléo helps blind people in their daily tasks with NFC tags</i>
      </p>
      <div>
        <span>
          <strong>What I did</strong>
        </span>
        <ul>
          <li>
            Development of iOS and android applications as well as the
            e-commerce
          </li>
          <li>Accessibility oriented (screen readers, siri shortcut).</li>
          <li>
            Cool stuff: scan a NFC tag will open the app and play the recording
          </li>
        </ul>
      </div>
      <span>
        <strong>What I used</strong>
      </span>
      <div className="tools">
        Front (react-native, vuejs) | Back (nodejs, mysql, firebase, stripe)
      </div>
    </div>
  );

  const mockup = (
    <div className="carousel column is-one-third">
      <Mockup device={"iphone-8"}>
        <Carousel>
          <div key={1}>
            <img src={vocaleoHome} alt="Page d'accueil" loading="lazy" />
          </div>
          <div key={2}>
            <img src={vocaleoConfigurate} alt="Configurer une balise" loading="lazy" />
          </div>
          <div key={3}>
            <img src={vocaleoCart} alt="Panier" loading="lazy" />
          </div>
        </Carousel>
      </Mockup>
    </div>
  );

  return (
    <section className="columns vocaleo experience">
      {description}
      {mockup}
    </section>
  );
}
