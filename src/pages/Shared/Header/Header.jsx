import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";


const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img className="mt-4" src={logo} alt="" />
        <p>
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D YYYY, h:mm a")}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Danger</Button>
        <Marquee className="text-danger" speed={120}>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as it happened at yeasterday 8:30 pm...
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;
