import { useState, useEffect } from "react";
import CountryMeal from "../Components/CountryMeal";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import Footer from "../Components/Footer";
import { API_URL } from "../settings";

export default function FilterByCategory(props) {
  const [filterC, setFilterC] = useState([]);
  const [loadingFilterC, setLoadingFilterC] = useState(true);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}filter.php?c=` + params.filter)
      .then((success) => {
        setFilterC(success.data.meals);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoadingFilterC(false);
      });
    }, [params.filter]);
    console.log(filterC);
  return (
    <>
      {loadingFilterC ? (
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
          <Row className="py-5">
            {filterC.map((e, i) => {
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
      )}
      <Footer />
    </>
  );
}
