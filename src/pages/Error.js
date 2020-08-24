import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { NavLink } from "react-router-dom";

function Error() {
  return (
    <Hero>
      <Banner title={"Error 404"} subtitle="Requested page not found">
        <NavLink to="/" className="btn-primary">
          Home
        </NavLink>
      </Banner>
    </Hero>
  );
}

export default Error;
