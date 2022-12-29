import { Navbar, Container } from "react-bootstrap";

function NavbarComponent() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">MailGateway</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
