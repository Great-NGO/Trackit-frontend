import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthService from "../../services/auth";

const Header = () => {
  const { getCurrentUser, logout } = AuthService;

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        // bg="dark"
        bg="primary"
        data-bs-theme="dark"
        className="p-2 m-1"
      >
        <Container class>
          <Navbar.Brand href="/">
            <h4>TRACKIT</h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto pt-2">
              {/* <Form className="d-flex" onSubmit={"handleSubmit"}>
                <FormControl
                  type="search"
                  name="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  // ref={search} //DOM element we are making reference to get the value.
                />
                <Button type="submit" variant="outline-success">
                  Search
                </Button>
              </Form> */}
            </Nav>

            <Nav className="me-auto pt-1 text-light">
              <Nav className="justify-content-center">
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/submit-report">Submit Report</Nav.Link>
                <Nav.Link href="/reports">Reports</Nav.Link>
              </Nav>
            </Nav>

            <Nav className="pt-1 ">

              {getCurrentUser() !== null ? (
                <>
                  <span>
                    <a
                      href={`/editProfile/${"userId"}`}
                      style={{ textDecoration: "none", color: "#B5B5B5" }}
                    >
                      {"usernameText"}
                      <img
                        src={"profilePicture"}
                        alt="Profile"
                        className="card-img-top"
                        // style={"profPicStyle"}
                      />
                    </a>
                  </span>
                  <Nav.Link
                    onClick={"clickLogout"}
                    style={{ marginRight: "10px" }}
                  >
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link eventKey={2} href="/login">
                    Login
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
