import { Button, Container } from "react-bootstrap";
import viteLogo from "/vite.svg";
import Loader from "../components/Loader";

const Home = () => {
  return (
    <Container
      fluid="md"
      className="landingPage d-flex justify-content-center align-items-center"
    >
      <main className="mx-auto">
        <div className="container">
          <div className="heading-landing">
            <div>
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </div>
            <h1>TRACKIT</h1>
          </div>
          <div className="homepagebeneath">
            <Button variant="secondary" className="btn-homepage">
              <a href="/login">Get Started</a>
            </Button>
            <p>
              <code> Copyright @TRACKIT 2024 </code>
            </p>
          </div>
        </div>
      </main>
    </Container>
  );
};

export default Home;
