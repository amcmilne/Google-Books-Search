import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home/Home";
import Saved from "./components/pages/Saved/Saved.js";
import Search from "./components/pages/Search/Search.js";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="BookApp">
      <Header />
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/search" component={Search} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
