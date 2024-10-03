// import React from "react";
import { Container } from "react-bootstrap";
import Layout from "../components/common/Layout";

const Error404 = () => {
  return (
    <Layout>
      <Container
        fluid="md"
        className="errorPage d-flex justify-content-center align-items-center"
      >
        <main className="mx-auto " style={{marginTop: "13rem"}}>
          <div className="container m-5">
            <h2>Error 404: Page Not Found</h2>
            <p>The page you are looking for does not exist.</p>
          </div>
        </main>
      </Container>
    </Layout>
  );
};

export default Error404;
