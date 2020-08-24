import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { NavLink } from "react-router-dom";

const Rooms = () => {
  return (
    <Hero hero="roomsHero">
      <Banner title="Our Rooms">
        <NavLink to="/" className="btn-primary">
          Return Home
        </NavLink>
      </Banner>
    </Hero>
  );
};

export default Rooms;
