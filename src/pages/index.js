import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { CopyToClipboard } from "react-copy-to-clipboard";
import VocaleoExperience from "../blocks/vocaleo";
import PoiscailleExperience from "../blocks/poiscaille";
import BedrockExperience from "../blocks/bedrock";
import ViacoExperience from "../blocks/viaco";
import JetpulpExperience from "../blocks/jetpulp";
import Navbar from "../components/Navbar";
import "./device.min.css";
import "./styles.scss";
import "./renaud.scss";

const RenaudPage = () => {
  const [contactMessage, setContactMessage] = useState("Contact Me");
  const [copied, setCopied] = useState(false);

  const handleContactClick = () => {
    setContactMessage("amsellem.renaud@gmail.com");
  };

  useEffect(() => {
    if (copied) setTimeout(() => setCopied(false), 1000);
  }, [copied]);

  return (
    <main className="content">
      <Helmet>
        <meta name="description" charSet="utf-8" content="Here, you can find descriptions of my main works, informations about me and how to contact me" />
      </Helmet>
      <Navbar />
      <title>Renaud Amsellem</title>
      <div className="presentation-wrapper columns">
        <div className="presentation column is-5 is-offset-6">
          <h1 className="is-large">
            Hello I'm Renaud Amsellem, a freelance full-stack web developer.
          </h1>
          <p>
            I'm a passionnate web developer. <br />
            My goal is to bring the most value to my clients with ideas and very
            fonctional code.
            <br />
            Also a strong believer in agile methodology and KISS.
          </p>
          <p>I'm self-taught with an engineer background</p>
        </div>
      </div>
      <section id="my-work">
        <div className="my-work">
          <p className="title is-3">MY WORK</p>
          <p>
            I've been working as a developer for 6 years. 3 years as a Back end
            developer in a web agency. And 3 years as a Frontend developer as a
            consultant. <br />I also worked on a few projects as the sole
            developer
          </p>
        </div>
        <VocaleoExperience />
        <PoiscailleExperience />
        <BedrockExperience />
        <ViacoExperience />
        <JetpulpExperience />
      </section>
      <section id="the-man-behind">
        <div className="the-man-behind">
          <p className="title is-3">THE MAN BEHIND</p>
          <p>
            Enough about work, discover who you are working with.
            <br />
            Here's what I do on my free time.
          </p>
        </div>
        <div>
          <p className="passion title is-3">Hiking.</p>
          <p className="passion-text">
            I think you could tell that with the picture of myself in the
            montains. I was in the pyrénées montains ; at the top of the little
            vignemale.
            <br />I also did most of the tour of the Ecrins massif, the
            beaufortain tour and half of the corsica famous GR20
          </p>
        </div>
        <div>
          <p className="passion title is-3">Societal topics.</p>
          <p className="passion-text">
            I need to understand how the world turns. Both with hard and soft
            science. <br /> Astrophysics, Ecology, recent history, taxes,
            elections, sociology, are some of the subjects I like to learn about
          </p>
        </div>
        <div>
          <p className="passion title is-3">Rubik's cube</p>
          <p className="passion-text">
            I took the hobby a few years back and even though I keep telling
            myself that after a given goal, i'll stop. I never stopped.
            <br />
            Not to brag about it. But I can probably solve it faster than anyone
            you know. My current best is 9.26 seconds.
          </p>
        </div>
        <div>
          <p className="passion title is-3">Video games</p>
          <p className="passion-text">
            I "fall into the pot" when I was a few years old thanks to my big
            brother. And it followed me to this day.
            <br />I enjoy retro gaming and indie games. Super mario world,
            Chrono trigger, The witness and Hades are some of the games I
            enjoyed the most.
            <br />
            And also guitar hero. I love guitar hero.
          </p>
        </div>
        <div>
          <p className="passion title is-3">Guitar</p>
          <p className="passion-text">
            I'm playing the instrument for almost a decade now - on and off.
            <br />
            I'm not a great player but I love music and I try to imitate the
            greats. One day i'll be able to play thunderstruck at the right
            tempo. One day!
          </p>
        </div>
      </section>
      <section id="contact">
        <h3 className="is-large">Let's work together!</h3>
        <CopyToClipboard
          text={"amsellem.renaud@gmail.com"}
          onCopy={() => setCopied(true)}
        >
          <a onClick={handleContactClick} className="contact-button">
            {contactMessage}
          </a>
        </CopyToClipboard>
        {copied && <p className="copied">copied!</p>}
      </section>
    </main>
  );
};

export default RenaudPage;
