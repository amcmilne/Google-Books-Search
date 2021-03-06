import React from "react";
import "../Header/Header.css";

function Header({children} ) {
  return (
    <div>
      <section className="hero is-dark is-large">
        <div className="hero-head">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="hero-title text-center">Google Books Search</h1>
              <h4 className="text-center">
                Search for and Save Books of Interest
              </h4>
            </div>
          </div>
        </div>
      </section>
      {children}
    </div>
  );
}

export default Header;
