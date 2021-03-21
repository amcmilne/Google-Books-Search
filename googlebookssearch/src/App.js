import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Saved from "./components/pages/Saved.js";
import Search from "./components/pages/Search.js";
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
      </Router>
    </div>
  );
}

export default App;
