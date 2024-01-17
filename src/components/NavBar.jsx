import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
export const NavBar = () => {
  return (
    <div style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
      <Navbar
        style={{ backgroundColor: "white", color: "red" }}
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/logo.png"
              alt="logo"
              style={{ height: "50px", maxWidth: "145px", width: "auto" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            
            <Nav>
              <Nav className="me-auto">
                <NavDropdown
                  title="Support"
                  id="collapsible-nav-dropdown"
                  className="custom-dropdown-title"
                >
                  <NavDropdown.Item href="/support-faq">
                    Support FAQ
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/support-downloads">
                    Downloads
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/support-notes">
                    OasisNotes Support
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/support-account-management">
                    Account Management
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link
                  style={{ color: "#1A9FB2", fontWeight: "600" }}
                  href="/pricing"
                >
                  Pricing
                </Nav.Link>
                <NavDropdown
                  title="About"
                  id="collapsible-nav-dropdown"
                  className="custom-dropdown-title"
                >
                  <NavDropdown.Item href="/about/clinical-advisors">
                    Clinical Advisors
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/about/partners">
                    Partners
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link
                  style={{ color: "#1A9FB2", fontWeight: "600" }}
                  href="/resources"
                >
                  Resources
                </Nav.Link>
                <Nav.Link
                  style={{ color: "#1A9FB2", fontWeight: "600" }}
                  href="/contact-us"
                >
                  Contact
                </Nav.Link>
                <Nav.Link
                  style={{
                    color: "white",
                    fontWeight: "500",
                    backgroundColor: "#1C5877",
                    borderRadius: "50px",
                    padding: "0.5rem 1.5rem",
                    textAlign: "center",
                  }}
                  href="/demo-request"
                >
                  Request Demo
                </Nav.Link>

              </Nav>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
