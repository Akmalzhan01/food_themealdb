import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CountryMeal from "../Components/CountryMeal";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import Footer from "../Components/Footer";
import { API_URL } from "../settings";

export default function Conutries(props) {
  const [countryID, setCountryID] = useState([]);
  const [loading, setLoading] = useState(true);
  const { name } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}filter.php?a=` + name)
      .then((success) => {
        setCountryID(success.data.meals);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [name]);
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
        <>
          <Container>
            <Row className="py-5">
              {countryID.map((e, i) => {
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
            </Row>
          </Container>
          <Footer />
        </>
      )}
    </>
  );
}
