import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MovieCard = ({ id, type, title, poster, year }) => {
  return (
    <div className="card border mb-3" style={{ maxWidth: "18rem" }}>
      <Link to={{ pathname: `movies-details/${id}` }} className="card-link">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{type}</h6>
          <img className="img-fluid" src={poster} alt={title} />
          <p className="card-text">Year: {year}</p>
        </div>
      </Link>
    </div>
  );
};

MovieCard.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired
};

export default MovieCard;
