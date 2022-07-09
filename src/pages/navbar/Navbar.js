import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import React from "react";
import "./style.css";

const Navigasi = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
      <Navbar.Brand href="#logo" className="logos">
        SES
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/edukasi">
            Edukasi
          </Nav.Link>
          <Nav.Link as={NavLink} to="/cek-kesehatan">
            Cek Kesehatan
          </Nav.Link>
          <Nav.Link as={NavLink} to="/article">
            Artikel
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            Tentang Kami
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigasi;
