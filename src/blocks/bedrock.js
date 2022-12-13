import React from "react";
import bedrock6Play from "../images/bedrock/6play.webp";
import bedrockSalto from "../images/bedrock/salto.webp";
import Mockup from "../components/Mockup";
import Carousel from "../components/Carousel";
import useIsBreakpoint from "../helpers/useIsBreakpoint";

const isBrowser = () => typeof window !== "undefined";

export default function BedrockExperience() {
  const isMobile = useIsBreakpoint();

  const description = (
    <div className="description column is-half">
      <p className="title">Bedrock ~ Frontend developer ~ 2020-2021</p>
      <p>
        <i>
          Bedrock delivers video streaming platform to media companies on all
          devices - 7 developers & 1 PO
        </i>
      </p>
      <div>
        <span>
          <strong>What I did</strong>
        </span>
        <ul>
          <li>
            Development of the websites (
            <a href="https://www.6play.fr" target="_blank" rel="noreferrer">
              6play
            </a>
            ,{" "}
            <a href="https://www.salto.fr" target="_blank" rel="noreferrer">
              salto
            </a>
            ,{" "}
            <a href="https://v2.videoland.com" target="_blank" rel="noreferrer">
              videoland
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
            <img src={bedrock6Play} alt="Homepage 6play" loading="lazy" />
          </div>
          <div>
            <img src={bedrockSalto} alt="Salto website" loading="lazy" />
          </div>
        </Carousel>
      </Mockup>
    </div>
  );

  const bedrockExperience = isMobile
    ? [description, mockup]
    : [mockup, description];

  return (
    <section className="bedrock experience columns is-desktop">
      {isBrowser() ? bedrockExperience : null}
    </section>
  );
}
