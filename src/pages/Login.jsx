
import { Link } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import Layout from "../components/common/Layout";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
  };

  return (
    <Layout>
      <Container fluid="md">

      <main className="mx-auto">

          <Form onSubmit={handleSubmit} className="mx-auto p-5 mt-5" style={{width:"60%"}}>
            <h2>Login</h2>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3 me-2 p-2">
              Sign In
            </Button>
            <Link className="ml-3" to="/forgot-password">
              Forgot Password?
            </Link>
          </Form>
        </main>
      </Container>
    </Layout>
  );
};

export default Login;
