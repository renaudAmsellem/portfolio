import React from "react";
import viacoRegister from "../images/viaco/register.webp";
import viacoPrequalif from "../images/viaco/pre_qualifications.webp";
import viacoFormMenu from "../images/viaco/form_menu.webp";
import viacoForm from "../images/viaco/form.webp";
import Mockup from "../components/Mockup";
import Carousel from "../components/Carousel";
import useIsBreakpoint from "../helpers/useIsBreakpoint";

const isBrowser = () => typeof window !== "undefined";

export default function ViacoExperience() {
  const isDesktop = useIsBreakpoint(1024);

  const description = (
    <div className="description column">
      <p className="title">Viaco ~ Frontend developer ~ 2019</p>
      <p>
        <i>
          Viaco is a platform for qualified contacts between construction agents
          - 2 developers & 1 PO
        </i>
      </p>
      <div>
        <span>
          <strong>What I did</strong>
        </span>
        <ul>
          <li>
            Development of the{" "}
            <a href="https://app.viaco.fr" target="_blank" rel="noreferrer">
              website
            </a>{" "}
            (~20 screens)
          </li>
          <li>
            Very complex multi step form with multiple models, search, pie
            charts and auto-save
          </li>
          <li>
            Cool functionnalities: password dots lighted when condition
            fulfilled
          </li>
        </ul>
      </div>
      <span>
        <strong>What we used</strong>
      </span>
      <div className="tools">
        Front (react, redux, formik, yup, styled components) | Back (Nodejs,
        Mysql, elasticsearch, keycloak)
      </div>
    </div>
  );

  const mockup = (
    <div className="carousel column is-half">
      <Mockup device={"macbook-pro"}>
        <Carousel>
          <div>
            <img src={viacoRegister} alt="Register viaco" loading="lazy" />
          </div>
          <div>
            <img src={viacoPrequalif} alt="Pre qualification" loading="lazy" />
          </div>
          <div>
            <img src={viacoFormMenu} alt="Form menu" loading="lazy" />
          </div>
          <div>
            <img src={viacoForm} alt="Multi step form" loading="lazy" />
          </div>
        </Carousel>
      </Mockup>
    </div>
  );

  const viacoExperience = isDesktop ? (
    <div>
      {description}
      {mockup}
    </div>
  ) : (
    <div>
      {mockup}
      {description}
    </div>
  );

  return (
    <section className="columns viaco experience is-desktop">
      {isBrowser() ? viacoExperience : null}
    </section>
  );
}
