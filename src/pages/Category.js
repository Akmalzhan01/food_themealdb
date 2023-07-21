import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import Footer from "../Components/Footer";
import Product from "../Components/Product";
import { API_URL } from "../settings";

export default function Category(props) {
  const [DATA, setDATA] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_URL}categories.php`)
      .then((response) => {
        setDATA(response.data.categories);
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <>
          <Container
            style={{
              width: "100%",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spinner variant="success" animation="grow" />
            <Spinner variant="success" animation="grow" />
            <Spinner variant="success" animation="grow" />
          </Container>
        </>
      ) : (
        <Container>
          <Row className="justify-content-center py-5">
            {DATA.map((e, i) => {
              return (
                <Col key={i} lg={3} md={4} sm={6} className="p-3">
                  <Product
                    e={e}
                    basket={props.basket}
                    setBasket={props.setBasket}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      )}
      <Footer />
    </>
  );
}
