import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Product(props) {
  return (
    <>
      <Card border="success" className="card-glassmorphism">
        <div className="position-relative">
          <Button
            as={Link}
            to={"/filter/" + props.e.strCategory}
            variant="success"
            className={
              "position-absolute top-50 start-50 translate-middle rounded-pill"
            }
          >
            Show details
          </Button>
          <Card.Img variant="top" src={props.e.strCategoryThumb} />
        </div>
        <Card.Body>
          <Card.Title>{props.e.strCategory}</Card.Title>
          <Card.Text className="text-truncate">
            {props.e.strCategoryDescription}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
export default Product;
