import React from "react";
import { Navbar } from "react-bootstrap";
import "./styles.css";

function FooterComponent() {
  return (
    <Navbar className="footer-color" fixed="bottom">
      <Navbar.Collapse className="justify-content-center">
        <Navbar.Text>Copyright &copy; {new Date().getFullYear()}</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default FooterComponent;
