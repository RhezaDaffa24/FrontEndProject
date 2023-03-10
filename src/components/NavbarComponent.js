import { Container, Navbar, Nav } from "react-bootstrap";

function NavbarComponent() {
  return (
    <Navbar className="nav-color" expand="lg">
      <Container>
        <Navbar.Brand href="#home">EmailGateway</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
