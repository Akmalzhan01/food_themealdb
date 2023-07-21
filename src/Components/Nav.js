import {
  Button,
  Offcanvas,
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Badge,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../settings";

export default function Navigate(props) {
  const [conutryList, setCountryList] = useState([]);
  const [searching, setSearching] = useState("");
  useEffect(() => {
    axios
      .get(`${API_URL}list.php?a=list`)
      .then((success) => {
        setCountryList(success.data.meals);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar
        fixed="top"
        variant="dark"
        bg="success"
        expand={"md"}
        className="mb-3 card-glassmorphism"
      >
        <Container fluid>
          <Navbar.Brand as={Link} to={"/"} className="Brand">
            OneFoods
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to={"/"}>
                  Home
                </Nav.Link>
                <NavDropdown
                  title="Conutries"
                  id={`offcanvasNavbarDropdown-expand-md`}
                >
                  {conutryList.map((e, i) => {
                    return (
                      <NavDropdown.Item
                        key={i}
                        className="overflow-auto"
                        as={Link}
                        to={`/area/${e.strArea}`}
                      >
                        {e.strArea}
                      </NavDropdown.Item>
                    );
                  })}
                </NavDropdown>
                <Nav.Link as={Link} to={"/basket"}>
                  Basket
                  <Badge bg="light text-dark rounded-pill" className="py-2">
                    {props.basket.length}
                  </Badge>
                </Nav.Link>
                <Nav.Link as={Link} to={"/aboutUs"}>
                  About us
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  value={searching}
                  onChange={(e) => setSearching(e.target.value)}
                />
                <Button
                  as={Link}
                  to={`/search/${searching}`}
                  variant="outline-success text-dark"
                  onClick={() => setSearching("")}
                >
                  Search
                </Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
