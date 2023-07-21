import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import CountryMeal from "../Components/CountryMeal";
import { useState } from "react";
import axios from "axios";
import Footer from "../Components/Footer";

export default function Basket(props) {
  const [modalShow, setModalShow] = useState(false);
  const [removeBasket, setRemoveBasket] = useState(false);
  const token = "5420140103:AAE7A5Q6ToezSpXvHsD7YhegZjqOAMG0Mvo";
  // For form input
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [region, setRegion] = useState("");
  const [check, setCheck] = useState([]);

  const addCheck = (element, index) => {
    setCheck((p) => {
      return element.target.checked
        ? [...p, index]
        : p.filter((y) => index.idMeal !== y.idMeal);
    });
  };
  const setTelegram = () => {
    const dataMeal = check
      .map((e) => {
        return `<i>${e.strMeal}</i>`;
      })
      .join("\n");
    console.log(number);
    axios
      .post(`https://api.telegram.org/bot${token}/sendMessage`, {
        parse_mode: "HTML",
        chat_id: "926684703",
        text: `<b>New order</b>\n<i>Name: </i> ${name}\n<i>Number: </i><a href="tel:${number}">${number}</a>\n<i>Region: </i>${region}\n ${dataMeal}`,
      })
      .then(() => {
        if (removeBasket) {
          props.setBasket((p) => {
            const b = p.filter((g) => {
              if (check.find((l) => l.idMeal === g.idMeal)) {
                return false;
              }
              return true;
            });
            localStorage.setItem("dataLocal", JSON.stringify(b));
            return b;
          });
        }
      });
  };

  return (
    <>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Reservation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Full name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="text"
                placeholder="+996 xxx xxx xxx"
                onChange={(e) => setNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Country, Region</Form.Label>
              <Form.Control
                type="text"
                placeholder="Kyrgyzstan, Region"
                onChange={(e) => setRegion(e.target.value)}
              />
            </Form.Group>
            {props.basket.map((e, i) => {
              return (
                <Form.Group
                  className="mb-3"
                  controlId={"formBasicCheckbox" + i}
                >
                  <Form.Check
                    type="checkbox"
                    label={e.strMeal}
                    onChange={(el) => addCheck(el, e)}
                  />
                </Form.Group>
              );
            })}
            <Form.Group
              className="mb-3 checkdanger"
              controlId={"formBasicCheckbox"}
            >
              <Form.Check
                className="checkdanger"
                type="checkbox"
                checked={removeBasket}
                onChange={(t) => setRemoveBasket(t.target.checked)}
                label={"Remove from Basket"}
                // onChange={}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)} className="btn-danger">
            Close
          </Button>
          <Button
            onClick={setTelegram}
            className="btn-success"
            disabled={name === "" || number === "" || region === ""}
          >
            Send
          </Button>
        </Modal.Footer>
      </Modal>
      <Container>
        <Row className="justify-content-center py-5">
          {props.basket.map((e, i) => {
            return (
              <Col key={i} lg={3} md={4} sm={6} className="p-3">
                <CountryMeal
                  e={e}
                  basket={props.basket}
                  setBasket={props.setBasket}
                />
              </Col>
            );
          })}
          <Button variant="success" onClick={() => setModalShow(true)}>
            Order meal
          </Button>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
