import { Container, Row, Col, Card } from "react-bootstrap";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiFacebookBoxLine } from "react-icons/ri";
import { VscGithub } from "react-icons/vsc";

export default function AboutUs() {
  return (
    <>
      <div className="gradient-background">
        <Container
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Col lg={12} md={12}>
              <Card.Img
                style={{
                  width: "100px",
                  height: "100px",
                }}
                className="rounded-circle"
                src={require("../img/IMG_1776.JPG")}
              />
            </Col>
            <Col lg={12} md={12}>
              <h3>Akmalzhan Tokhtasinov</h3>
            </Col>
            <Col>
              <VscGithub className="text-white display-6" />
              <AiOutlineInstagram className="text-white display-6" />
              <RiFacebookBoxLine className="text-white display-6" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
