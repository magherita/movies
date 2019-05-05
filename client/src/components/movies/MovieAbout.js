import React from "react";
import PropTypes from "prop-types";

const MovieAbout = ({
  plot,
  released,
  dvd,
  language,
  country,
  boxOffice,
  actors,
  directors,
  writer,
  production,
  website,
  awards
}) => {
  return (
    <div className="form-group">
      {/* Plot */}
      <div className="row d-flex align-items-stretch">
        <div className="col-md-12 d-flex align-items-stretch">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Plot</h3>
            </div>
            <div className="panel-body">{plot}</div>
          </div>
        </div>
      </div>
      {/* Actors */}
      <div className="row d-flex align-items-stretch">
        <div className="col-md-12 d-flex align-items-stretch">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Actors</h3>
            </div>
            <div className="panel-body">{actors}</div>
          </div>
        </div>
      </div>
      {/* Directors */}
      <div className="row d-flex align-items-stretch">
        <div className="col-md-12 d-flex align-items-stretch">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Directors</h3>
            </div>
            <div className="panel-body">{directors}</div>
          </div>
        </div>
      </div>
      {/* Writers */}
      <div className="row d-flex align-items-stretch">
        <div className="col-md-12 d-flex align-items-stretch">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Writers</h3>
            </div>
            <div className="panel-body">{writer}</div>
          </div>
        </div>
      </div>
      {/* Writers */}
      <div className="row d-flex align-items-stretch">
        <div className="col-md-12 d-flex align-items-stretch">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Writers</h3>
            </div>
            <div className="panel-body">{writer}</div>
          </div>
        </div>
      </div>
      {/* Miscellaneous */}
      <div className="row d-flex align-items-stretch">
        <div className="col-md-12 d-flex align-items-stretch">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Miscellaneous</h3>
            </div>
            <div className="panel-body">
              <div className="row d-flex align-items-stretch">
                <div className="col-md-6 d-flex align-items-stretch">
                  <p>
                    <strong>Cinema:</strong>
                    {released}
                  </p>
                  <p>
                    <strong>DVD:</strong>
                    {dvd}
                  </p>
                  <p>
                    <strong>Box Office:</strong>
                    {boxOffice}
                  </p>
                  <p>
                    <strong>Awards:</strong>
                    {awards}
                  </p>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                  <p>
                    <strong>Language:</strong>
                    {language}
                  </p>
                  <p>
                    <strong>Country:</strong>
                    {country}
                  </p>
                  <p>
                    <strong>Production:</strong>
                    {production}
                  </p>
                  <p>
                    <strong>Website:</strong>
                    {website}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MovieAbout.propTypes = {
  plot: PropTypes.string.isRequired,
  released: PropTypes.string.isRequired,
  dvd: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  boxOffice: PropTypes.string.isRequired,
  actors: PropTypes.string.isRequired,
  directors: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
  production: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  awards: PropTypes.string.isRequired
};

export default MovieAbout;
