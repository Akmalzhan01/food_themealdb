import { Card, Container, Col, Row, Accordion } from "react-bootstrap";

export default function DetailCardingredient({ e }) {
  return (
    <>
      <Container>
        <Card className="DetailCard">
          <Card.Header className="bg-success  text-white">
            <h3>{e.strMeal}</h3>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md={4} sm={12}>
                <Card.Img
                  className="rounded-circle DetailCardImg border border-secondary d-flex justify-content-center"
                  style={{ width: "15rem" }}
                  variant="top"
                  src={e.strMealThumb}
                />
              </Col>
              <Col md={4} sm={12}>
                <ul className="list-group list-group-flush">
                  <li
                    className="list-group-item active bg-success opacity-75"
                    aria-current="true"
                  >
                    An item
                  </li>
                  <li className="list-group-item">Name: {e.strMeal}</li>
                  <li className="list-group-item">Area: {e.strArea}</li>
                </ul>
              </Col>
              <Col md={4} sm={12}>
                <ul className="list-group list-group-flush">
                  <li
                    className="list-group-item active bg-success opacity-75"
                    aria-current="true"
                  >
                    Ingredients
                  </li>
                  {Object.keys(e)
                    .filter((g) => g.startsWith("strIng") && e[g] !== "")
                    .map((g, i) => (
                      <li className="list-group-item" key={i}>
                        {e[g]}
                      </li>
                    ))}
                </ul>
              </Col>
            </Row>
            <Container className="p-2">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Ingredients</Accordion.Header>
                  <Accordion.Body>
                    <p>{e.strInstructions}</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Watch the video instruction below
                  </Accordion.Header>
                  <Accordion.Body>
                    <iframe
                      style={{
                        width: "100%",
                        height: "500px",
                      }}
                      src={e.strYoutube.replace("watch?v=", "embed/")}
                    />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Container>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
