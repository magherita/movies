import React from "react";
import PropTypes from "prop-types";

const MovieRating = ({ ratings }) => {
  return (
    <div className="form-group m-auto">
      <div className="row d-flex align-items-stretch">
        <div className="col-md-12 d-flex align-items-stretch">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Ratings</h3>
            </div>
            <div className="panel-body">
              <div className="form-inline">
                <div className="row d-flex align-items-stretch" />
                {ratings.map(rating => (
                  <div className="col-md-3 d-flex align-items-stretch br-1">
                    <p>{rating.Value}</p>
                    <p>{rating.Source}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MovieRating.propTypes = {
  ratings: PropTypes.array.isRequired
};

export default MovieRating;
