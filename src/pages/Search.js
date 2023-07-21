import CountryMeal from "../Components/CountryMeal";
import axios from "axios";
import { useState, useEffect } from "react";
import { Container, Spinner, Row, Col, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import { API_URL } from "../settings";

export default function Search(props) {
  const [loadSearch, setLoadSearch] = useState(true);
  const [searchData, setSearchData] = useState([]);
  const [show, setShow] = useState(true);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}search.php?s=${params.val}`)
      .then((success) => {
        setSearchData(success.data.meals);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoadSearch(false);
      });
  }, [params.val]);

  return (
    <>
      {loadSearch ? (
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
              {searchData ? (
                searchData.map((e, i) => {
                  return (
                    <Col key={i} lg={3} md={4} sm={6} className="p-3">
                      <CountryMeal
                        e={e}
                        basket={props.basket}
                        setBasket={props.setBasket}
                      />
                    </Col>
                  );
                })
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {
                    <Alert
                      variant="danger"
                      onClose={() => setShow(false)}
                      dismissible
                    >
                      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                      <p>
                        Change this and that and try again. Duis mollis, est non
                        commodo luctus, nisi erat porttitor ligula, eget lacinia
                        odio sem nec elit. Cras mattis consectetur purus sit
                        amet fermentum.
                      </p>
                    </Alert>
                  }
                </div>
              )}
            </Row>
          </Container>
          <Footer />
        </>
      )}
    </>
  );
}
