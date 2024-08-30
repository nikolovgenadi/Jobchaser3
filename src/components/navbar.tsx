import React from "react";
import { Navbar, Container, Nav, Form, FormControl } from "react-bootstrap";

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

function NavbarComponent({ searchQuery, setSearchQuery }: NavbarProps) {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Jobs</Nav.Link>
            <Nav.Link href="#home">Signup</Nav.Link>
            <Nav.Link href="#home">Sign-in</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
