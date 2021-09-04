import * as React from "react";
import useComponentVisible from "../helpers/useComponentVisible";

const Navbar = (props) => {
  const { ref, visible, setVisible } = useComponentVisible(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation" ref={ref}>
      <div className="navbar-brand" role="button" tabIndex={0} onKeyPress={() => setVisible(false)} onClick={() => setVisible(false)}>
        <div
          role="button"
          className={`navbar-burger ${visible ? "is-active" : ""}`}
          tabIndex={0}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onKeyPress={() => setVisible(!visible)}
          onClick={(e) => {
            e.stopPropagation();
            setVisible(!visible);
          }}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div className={`navbar-menu ${visible ? "is-active" : ""}`}>
          <a className="navbar-item" onClick={() => setVisible(false)} href="#my-work">
            My work
          </a>

          <a className="navbar-item" onClick={() => setVisible(false)} href="#the-man-behind">The man behind</a>

          <a className="navbar-item" onClick={() => setVisible(false)} href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
