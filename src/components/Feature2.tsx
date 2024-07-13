
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./feature2.css"; // Import the CSS file for custom styles

const Feature2 = () => {
  return (
    <Container className="my-5 mt-5">
      <Row className="align-items-center row">
        <div className="col-md-12 mt-5">
        <h1 className="display-4 text-center  headings mt-5">Educa Studya <br />
         Features</h1>

        </div>
        <Row className="content mt-5">

       
        <Col md={6} className="text-md-left mb-4 mb-md-0  mt-5">
          <div className="left" >
          <img src="Eclipse.svg" alt="Icon" />
            <div className="d-flex align-items-center ">
             
              <h1 className="mt-2">Where collaboration <br />meets knowledge</h1>
            </div>
            <p className="mt-2">
              Dive into a doc together and express your first ideas, get <br />feedback, map out a plan or write up the final documentation. <br /> Compose your most important work, together—no matter <br /> where you are in the world.
            </p>
          </div>
        </Col>
        <Col md={6} className="text-center mt-5 ">
          <img className="ms-5"
            src="Feature.svg"
            alt="Mobile App Mockup"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Feature2;
