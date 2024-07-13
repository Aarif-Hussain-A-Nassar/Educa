import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './feature1.css'

const Feature1 = () => {
  return (
  


    <Container className=" container mt-5">
         
      <Row className="align-items-center mt-5 ">
        <Col md={6} className="  mb-4 mb-md-0  ">
          <div className="textpara">
            <img 
              src="Icon.svg"
              alt="Icon"
            />

            <h1 className="heading" >
              Integrate with your <br /> favorite tools.
            </h1>
            <p className="paragraph mt-5">
              It's a best-in-class product that isn't trying to replace the <br/> rest
              of your stack. That's why it integrates with everything  <br /> else,
              including your spreadsheets, slide decks, flowcharts, <br /> task
              managers, and much more.
            </p>
          </div>
        </Col>
        <Col md={6} className="text-center right ">
          <img className="image"
            src="Mockup.svg"
            alt="Dashboard Illustration"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Col>
      </Row>
     
    </Container>
    
  );
};

export default Feature1;
