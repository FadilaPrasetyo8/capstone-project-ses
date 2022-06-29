import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import React from 'react';
import './style.css';

const Navigasi = () => {
  return (
      <Navbar>
        <Container className='container'>
          <Navbar.Brand href="#logo">SES</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/edukasi">Edukasi</Nav.Link>
            <Nav.Link as={NavLink} to="/cek-kesehatan">Cek Kesehatan</Nav.Link>
            <Nav.Link as={NavLink} to="/article">Artikel</Nav.Link>
            <Nav.Link as={NavLink} to="/about" >Tentang kami</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Navigasi;