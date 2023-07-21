import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#198754",
        padding: "15px",
        color: "#fff",
      }}
    >
      <Container>
        <Row>
          <Col>
            <h5>
              <b>Address:</b>
            </h5>
            <div>
              <b>Country:</b> Kyrgyzstan
            </div>
            <div>
              <b>City:</b> Osh
            </div>
            <div>
              <b>St:</b> Lenin 245
            </div>
          </Col>
          <Col>
            <h5>Contacts:</h5>
            <div>+996 555 555 555</div>
            <div>+996 777 555 555</div>
            <div>+996 222 555 555</div>
          </Col>
          <Col>
            <h5>We are on social media :</h5>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
