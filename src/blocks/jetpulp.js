import React from "react";
import jetpulpLavieclaire from "../images/jetpulp/lavieclaire.webp";
import jetpulpLouispion from "../images/jetpulp/louispion.webp";
import jetpulpCridon from "../images/jetpulp/cridon.webp";
import jetpulpRobur from "../images/jetpulp/robur.webp";
import Mockup from "../components/Mockup";
import Carousel from "../components/Carousel";

export default function BedrockExperience() {
  const description = (
    <div className="description column">
      <p className="title">Jetpulp ~ Backend developer ~ 2016-2018</p>
      <p>
        <i>Jetpulp is a digital agency working on marketing, dev and UX</i>
      </p>
      <div>
        <span>
          <strong>What I did (among others)</strong>
        </span>
        <ul>
          <li>
            <a
              href="https://lavieclaire.com/compte/accueil"
              target="_blank"
              rel="noreferrer"
            >
              La vie claire
            </a>{" "}
            : customer account (5 screens) - data fetched from partner's API
          </li>
          <li>
            <a href="https://louispion.fr/" target="_blank" rel="noreferrer">
              Louispion
            </a>{" "}
            : catalog import (~2000 products), orders export to ERP, listing
            ordered per user (earlybird API)
          </li>
          <li>
            <a
              href="https://www.cridon-lyon.fr/"
              target="_blank"
              rel="noreferrer"
            >
              Cridon lyon
            </a>{" "}
            : user account (9 screens), online questions responses with 15 years
            history,
          </li>
          <li>
            <a href="https://www.robur.fr/" target="_blank" rel="noreferrer">
              Robur
            </a>{" "}
            : geolocation with 3 different prices per product and 4 languages,
            import of products
          </li>
          <li>
            Moultipass (on freetime) : company password manager with chrome
            plugin, webapp & one-click connect
          </li>
        </ul>
      </div>
      <span>
        <strong>What we used</strong>
      </span>
      <div className="tools">
        Back (PHP, elasticsearch) | Wordpress | Magento (1 & 2) | Front (jQuery,
        vuejs, Algolia)
      </div>
    </div>
  );

  const mockup = (
    <div className="carousel column is-half">
      <Mockup device={"macbook-pro"}>
        <Carousel>
          <div>
            <img src={jetpulpLavieclaire} alt="Lavieclaire account" />
          </div>
          <div>
            <img src={jetpulpLouispion} alt="louispion listing products" />
          </div>
          <div>
            <img src={jetpulpCridon} alt="cridon lyon account" />
          </div>
          <div>
            <img src={jetpulpRobur} alt="robur map reseller search" />
          </div>
        </Carousel>
      </Mockup>
    </div>
  );

  return (
    <section className="jetpulp experience columns is-desktop">
      {description}
      {mockup}
    </section>
  );
}
