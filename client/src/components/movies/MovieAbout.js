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
      <div className="row">
        <div className="col-md-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Plot</h3>
            </div>
            <div className="panel-body">{plot}</div>
          </div>
        </div>
      </div>
      {/* Actors */}
      <div className="row">
        <div className="col-md-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Actors</h3>
            </div>
            <div className="panel-body">{actors}</div>
          </div>
        </div>
      </div>
      {/* Directors */}
      <div className="row d-flex">
        <div className="col-md-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Directors</h3>
            </div>
            <div className="panel-body">{directors}</div>
          </div>
        </div>
      </div>
      {/* Writers */}
      <div className="row">
        <div className="col-md-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Writers</h3>
            </div>
            <div className="panel-body">{writer}</div>
          </div>
        </div>
      </div>
      {/* Miscellaneous */}
      <div className="row">
        <div className="col-md-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Miscellaneous</h3>
            </div>
            <div className="panel-body">
              <div className="row">
                <div className="col-md-12">
                  <strong>Cinema:</strong> {released}
                </div>
                <div className="col-md-12">
                  <strong>DVD:</strong> {dvd}
                </div>
                <div className="col-md-12">
                  <strong>Box Office:</strong> {boxOffice}
                </div>
                <div className="col-md-12">
                  <strong>Awards:</strong> {awards}
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <strong>Language:</strong> {language}
                </div>
                <div className="col-md-12">
                  <strong>Country:</strong> {country}
                </div>
                <div className="col-md-12">
                  <strong>Production:</strong> {production}
                </div>
                <div className="col-md-12">
                  <strong>Website:</strong> {website}
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
  plot: PropTypes.string,
  released: PropTypes.string,
  dvd: PropTypes.string,
  language: PropTypes.string,
  country: PropTypes.string,
  boxOffice: PropTypes.string,
  actors: PropTypes.string,
  directors: PropTypes.string,
  writer: PropTypes.string,
  production: PropTypes.string,
  website: PropTypes.string,
  awards: PropTypes.string
};

export default MovieAbout;
