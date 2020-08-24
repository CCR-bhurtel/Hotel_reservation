import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { NavLink } from "react-router-dom";
import Services from "../components/Services";
import FeaturdRooms from "../components/FeaturdRooms";

const Home = () => {
  return (
    <React.Fragment>
      <Hero>
        <Banner
          title="Luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <NavLink to="/rooms" className="btn-primary">
            Our Rooms
          </NavLink>
        </Banner>
      </Hero>
      <Services />
      <FeaturdRooms />
    </React.Fragment>
  );
};

export default Home;
