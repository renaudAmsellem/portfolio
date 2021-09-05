import React from "react";
import bedrock6Play from "../images/bedrock/6play.webp";
import bedrockSalto from "../images/bedrock/salto.webp";
import Mockup from "../components/Mockup";
import Carousel from "../components/Carousel";

export default function BedrockExperience() {
  const description = (
    <div className="description column is-half">
      <p className="title">Bedrock ~ Frontend developer ~ 2020-2021</p>
      <p>
        <i>
          Bedrock delivers video streaming platform to media companies on all
          devices
        </i>
      </p>
      <div>
        <span>
          <strong>What I did</strong>
        </span>
        <p>Team of 7 devs & 1 PO working semi-agile</p>
        <ul>
          <li>
            Development of the websites (
            <a href="https://www.6play.fr" target="_blank" rel="noreferrer">
              6play
            </a>
            ,{" "}
            <a href="https://www.salto.fr" target="_blank" rel="noreferrer">
              salto.fr
            </a>
            ,{" "}
            <a href="https://v2.videoland.com" target="_blank" rel="noreferrer">
              videoland.com
            </a>
            ...), theme blocks, gdpr
          </li>
          <li>Improvment of test process and fix of the platform bugs</li>
          <li>
            Each code is unit and functionnal tested and reviewed by all the
            devs
          </li>
          <li>
            Cool functionnalities: service worker & decrease image qualities
            depending on user connexion
          </li>
        </ul>
      </div>
      <span>
        <strong>What we used</strong>
      </span>
      <div className="tools">
        Front (react, redux, styled components, jest, cucumber, webpack) | Back
        (nodejs, SSR, jenkins)
      </div>
    </div>
  );

  const mockup = (
    <div className="carousel column is-half">
      <Mockup device={"macbook-pro"}>
        <Carousel>
          <div>
            <img src={bedrock6Play} alt="Page d'accueil 6play" />
          </div>
          <div>
            <img src={bedrockSalto} alt="Site salto" />
          </div>
        </Carousel>
      </Mockup>
    </div>
  );

  return (
    <section className="bedrock experience columns is-desktop">
      {description}
      {mockup}
    </section>
  );
}
