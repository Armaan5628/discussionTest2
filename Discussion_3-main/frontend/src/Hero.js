import React from "react";
import "./App.css";

export default function Hero() {
  return (
    <section id="hero" className="hero-section d-flex align-items-center">
      <div className="container text-center text-white">
        <h1 className="display-4">Welcome to the Discussion Board</h1>
        <p className="lead">
          Connect, share, and collaborate on exciting topics with peers.
        </p>
      </div>
    </section>
  );
}
