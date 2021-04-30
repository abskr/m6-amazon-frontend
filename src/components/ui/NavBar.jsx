import React from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import styled from 'styled-components'

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-5">
      <Navbar.Brand><img width="100" src="https://www.doorwaysva.org/wp-content/uploads/2020/08/output-onlinepngtools.png" alt="amazon logo"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/account">Account</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;