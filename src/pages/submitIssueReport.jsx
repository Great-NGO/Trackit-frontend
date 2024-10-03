import React from "react";
import { Form, Button, Container, Col } from "react-bootstrap";
import Layout from "../components/common/Layout";

const SubmitIssueReport = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your issue report submission logic here
  };

  return (
    <Layout>
      <Container fluid="md">
        <main className="mx-auto">
          <Form
            onSubmit={handleSubmit}
            className="mx-auto mt-1 p-5"
            style={{ width: "60%" }}
          >
            <h2>Submit Issue Report</h2>
            <Form.Group controlId="formBasicTitle">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name of the issue"
                name="title"
              />
            </Form.Group>

            <Form.Group controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter issue description"
              />
            </Form.Group>

            <Form.Group controlId="formBasicTitle">
              <Form.Label>Customer/Client</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter customer/client"
                name="customer"
              />
            </Form.Group>

            <Form.Group controlId="formBasicTitle">
              <Form.Label>SBU</Form.Label>
              <Form.Control type="text" placeholder="Enter SBU" name="sbu" />
            </Form.Group>

            <Form.Group controlId="formBasicTitle">
              <Form.Label>Solution</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter issue solution"
                name="solution"
              />
            </Form.Group>

            <Form.Group controlId="formBasicTitle">
              <Form.Label>Module</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter issue module"
                name="module"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridProgram" sm={6}>
              <Form.Label>Severity</Form.Label>
              <Form.Control
                as="select"
                defaultValue="low.."
                // value={severity}
                name="severity"
                // onChange={handleInputChange}
              >
                <option>Choose...</option>
                <option value={"low"}> low</option>
                <option value={"medium"}> medium</option>
                <option value={"high"}> high</option>
              </Form.Control>

              <Form.Label>Due Date</Form.Label>
              <Form.Control
                type="date"
                name="dueDate"
                // onChange={handleInputChange}
              />
            </Form.Group>

     

            <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
        </main>
      </Container>
    </Layout>
  );
};

export default SubmitIssueReport;
