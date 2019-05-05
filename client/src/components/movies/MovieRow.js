import React from "react";
import PropTypes from "prop-types";
import MovieCard from "./MovieCard";

const MovieRow = ({ row }) => {
  return (
    <div className="row d-flex align-items-stretch">
      {row.map(movie => (
        <div key={movie.imdbID} className="col-md-3 d-flex align-items-stretch">
          <MovieCard
            id={movie.imdbID}
            type={movie.Type}
            title={movie.Title}
            poster={movie.Poster}
            year={movie.Year}
          />
        </div>
      ))}
    </div>
  );
};

MovieRow.propTypes = {
  row: PropTypes.array.isRequired
};

export default MovieRow;
