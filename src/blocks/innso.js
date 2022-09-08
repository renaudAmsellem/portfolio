import React from "react";
import innsoEngage from "../images/innso/engage.webp";
import Mockup from "../components/Mockup";
import Carousel from "../components/Carousel";

export default function InnsoExperience() {
  const description = (
    <div className="description column is-half">
      <p className="title">Innso ~ Frontend developer ~ 2022</p>
      <p>
        <i>
          Innso provides a ticketing platform for call center agents - 5
          developers & 1 PO
        </i>
      </p>
      <div>
        <span>
          <strong>What I did</strong>
        </span>
        <ul>
          <li>Development of a new platform for supervisors</li>
          <li>Lot of refactoring to avoid redundancy & improve reusability </li>
          <li>Implementation of unit tests</li>
          <li>Cool functionnalities: server side events & web sockets</li>
        </ul>
      </div>
      <span>
        <strong>What we used</strong>
      </span>
      <div className="tools">vuejs, vuex, vuetify, jest</div>
    </div>
  );

  const mockup = (
    <div className="carousel column is-half">
      <Mockup device={"macbook-pro"}>
        <Carousel>
          <div>
            <img src={innsoEngage} alt="Engage Application" loading="lazy" />
          </div>
        </Carousel>
      </Mockup>
    </div>
  );

  return (
    <section className="innso experience columns is-desktop">
      {description}
      {mockup}
    </section>
  );
}
