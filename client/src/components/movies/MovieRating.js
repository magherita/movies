import React from "react";
import PropTypes from "prop-types";

const MovieRating = ({ ratings }) => {
  return (
    <div className="form-group m-auto">
      <div className="row">
        <div className="col-md-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Ratings</h3>
            </div>
            <div className="panel-body">
              <div className="form-inline">
                <div className="row">
                  {ratings.map((rating, index) => (
                    <div key={index} className="col-md-4">
                      <p>{rating.Value}</p>
                      <p>
                        {rating.Source === "Internet Movie Database"
                          ? "IMDb"
                          : rating.Source}
                      </p>
                    </div>
                  ))}
                </div>
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
