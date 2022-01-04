import ReactStars from "react-rating-stars-component";

export default function TenStars(props) {
  const ratingChanged = (newRating) => {
    props.search2(newRating);
  };

  return (
    <ReactStars
      count={10}
      onChange={ratingChanged}
      size={25}
      activeColor="#ffd700"
    />
  );
}