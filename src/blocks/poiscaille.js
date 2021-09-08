import React from "react";
import poiscailleLogin from "../images/poiscaille/login.webp";
import poiscailleListing from "../images/poiscaille/listing.webp";
import poiscailleForm from "../images/poiscaille/form.webp";
import poiscailleMenu from "../images/poiscaille/menu.webp";
import poiscailleInvoice from "../images/poiscaille/invoice.webp";
import Mockup from "../components/Mockup";
import Carousel from "../components/Carousel";
import useIsBreakpoint from "../helpers/useIsBreakpoint";

const isBrowser = () => typeof window !== "undefined"

export default function PoiscailleExperience() {
  const isMobile = useIsBreakpoint();

  const description = (
    <div className="description column is-two-thirds">
      <p className="title">Poiscaille ~ Fullstack developer ~ 7 work days</p>
      <p>
        <i>Poiscaille is the sea version of the vegetable basket - sole developer</i>
      </p>
      <div>
        <span>
          <strong>What I did</strong>
        </span>
        <ul>
          <li>
            Development of a web application for fishermen to add their catch of
            the day
          </li>
          <li>Cool stuff: generate & email invoice as pdf</li>
        </ul>
      </div>
      <span>
        <strong>What I used</strong>
      </span>
      <div className="tools">
        Front (React, bulma - 10 screens) | Back: (nodejs, express, nedb,
        nodemailer, pdfkit)
      </div>
    </div>
  );

  const mockup = (
    <div className="carousel column is-one-third">
      <Mockup device={"iphone-8"} className="is-left">
        <Carousel>
          <div>
            <img src={poiscailleLogin} alt="Login" loading="lazy" />
          </div>
          <div>
            <img src={poiscailleListing} alt="Listing" loading="lazy" />
          </div>
          <div>
            <img src={poiscailleForm} alt="Form" loading="lazy" />
          </div>
          <div>
            <img src={poiscailleMenu} alt="Menu" loading="lazy" />
          </div>
          <div>
            <img src={poiscailleInvoice} alt="Invoice" loading="lazy" />
          </div>
        </Carousel>
      </Mockup>
    </div>
  );

  const poiscailleExperience = isMobile ? <>{description}{mockup}</> : <>{mockup}{description} </>;

  return <section className="experience poiscaille columns">
    {isBrowser() ? poiscailleExperience : null}
  </section>;
}
