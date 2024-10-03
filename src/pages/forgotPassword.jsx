import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import Layout from "../components/common/Layout";

const ForgotPassword = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your forgot password logic here
  };

  return (
    <Layout>
      <Container fluid="md">
        <main className="mx-auto">
          <div className="form container">
            <Form
              onSubmit={handleSubmit}
              className=" mx-auto mt-5 p-5"
              style={{ width: "65%" }}
            >
              <h2>Forgot Password</h2>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formSubmit">
                <Button variant="primary" type="submit" className="mt-3 me-2">
                  Reset Password
                </Button>
                <Link className="ml-3" to="/login">
                  <span className="pt-4">Back to Login</span>
                </Link>
              </Form.Group>
            </Form>
          </div>
        </main>
      </Container>
    </Layout>
  );
};

export default ForgotPassword;
