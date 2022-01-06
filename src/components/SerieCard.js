import { Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import {Link} from "react-router"
export default function SerieCard(props) {
  return (
    <div className="Card">
      <Card>
        <Card.Img
          variant="top"
          src={props.serie.posterURL}
          alt=""
          style={{ width: 250, height: 250 }}
        />
        <Card.Body>
        <Card.Title className="text-danger" />
            {" "}
            <Link to={`/description/${props.serie.id}`} state={props.serie.id}>
              {props.serie.title}
            </Link>
          <Card.Text className="text-muted">
            {props.serie.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <ReactStars
            value={props.serie.rating}
            count={10}
            size={25}
            edit={false}
            isHalf={true}
          />
        </Card.Footer>
      </Card>
    </div>
  );
}