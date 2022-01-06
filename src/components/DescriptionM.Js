import React from "react";
import { Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { useLocation } from "react-router-dom";

export default function DescriptionM(props) {
  console.log(props);
  const location = useLocation();

  const series = props.Series.find((el) => el.id === +location.state);
  console.log(series);
  return (
    <div className="Annex">
      <Card className="text-center">
        <Card.Header>
          <h1>The trailer of Serie:{series.title}</h1>
        </Card.Header>
        <Card.Body>
          <Card.Title className="text-danger">
            <h1>{series.title}</h1>
          </Card.Title>
          <Card.Text className="text-muted">
            {series.trailer}
            <hr />
            <p id="text">{series.description}</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer id="footer" className="text-muted">
          <ReactStars
            value={series.rating}
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







