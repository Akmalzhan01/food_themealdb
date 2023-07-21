import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import DetailCardingredient from "../pages/DetailCardingredient";
import { API_URL } from "../settings";

export default function DetailCard() {
  const [ingredients, setIngredients] = useState(null);
  const [loadingDetailCard, setLoadingDetailCard] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${API_URL}lookup.php?i=` + id)
      .then((success) => {
        setIngredients(success.data.meals[0]);
        console.log(success);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoadingDetailCard(false);
      });
  }, [id]);

  return (
    <>
      {loadingDetailCard ? (
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
          <Container style={{ padding: "80px" }}>
            <DetailCardingredient e={ingredients} />
          </Container>
        </>
      )}
    </>
  );
}
