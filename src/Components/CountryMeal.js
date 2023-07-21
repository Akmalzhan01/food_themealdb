import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function CountryMeal(props) {
  const add = () => {
    props.setBasket((prev) => [...prev, props.e]);
  };

  function remove() {
    props.setBasket((p) => {
      return p.filter((re) => {
        return re.idMeal !== props.e.idMeal;
      });
    });
  }

  return (
    <>
      <Card className={"card-glassmorphism"}>
        <div className="position-relative" as={Link} to={"/product/:id"}>
          <Button
            variant="success"
            className={
              "position-absolute top-50 start-50 translate-middle rounded-pill"
            }
            as={Link}
            to={"/product/" + props.e.idMeal}
          >
            Show details
          </Button>
          <Card.Img
            as={LazyLoadImage}
            variant="top"
            src={props.e.strMealThumb}
          />
        </div>

        <Card.Body>
          <Card.Title className={"text-truncate"}>{props.e.strMeal}</Card.Title>
          <Card.Text className="text-truncate">{''}</Card.Text>
          {props.basket.find((el) => {
            return props.e.idMeal === el.idMeal;
          }) ? (
            <Button onClick={remove} variant="danger">
              Remove from basket.
            </Button>
          ) : (
            <Button onClick={add} variant="success">
              Add to basket.
            </Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
}
