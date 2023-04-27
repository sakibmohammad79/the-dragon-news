import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from '../../../assets/bg.png'

const RightNav = () => {
  return (
    <div className="mt-5">
      <h4>Login With</h4>
      <Button className="mb-2 px-3" variant="outline-primary">
        {" "}
        <FaGoogle /> Login With Google
      </Button>
      <Button className="px-3" variant="outline-secondary">
        {" "}
        <FaGithub /> Login With Github
      </Button>
      <div className="mt-3">
        <ListGroup>
            <h4>Find Us On</h4>
          <ListGroup.Item> <FaFacebook/> Facbook</ListGroup.Item>
          <ListGroup.Item> <FaTwitter/> Twitter</ListGroup.Item>
          <ListGroup.Item> <FaInstagram/> Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
