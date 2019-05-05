import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MovieCard = ({ id, type, title, poster, year }) => {
  return (
    <div id={id} className="card border mb-3" style={{ maxWidth: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{type}</h6>
        <img className="card-img-top" src={poster} alt={title} />
        <p className="card-text">Released: {year}</p>
        <Link to="/movie-details" className="card-link">
          Details...
        </Link>
      </div>
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
