import React from "react";
import "./pages.css";

function Home() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-light bg-light">
        <h3>
          Where your favorite books are just a click away!
        </h3>
      </nav>

      <img src="./images/book.jpg" className="logo" alt="books" />
    </div>
  );
}

export default Home;
