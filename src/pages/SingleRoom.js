import React, { useEffect } from "react";
import defaultImg from "../images/room-10.jpeg";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { RoomContext } from "../context";

function SingleRoom(props) {
  useEffect(() => {}, []);
  return (
    <div>
      <h3>Hello from the single room page</h3>
    </div>
  );
}

export default React.memo(SingleRoom);
