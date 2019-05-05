import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import DropdownList from "../common/DropdownList";

const MovieSearch = ({ value, onChange, type, year, error }) => {
  let currentYear = new Date().getFullYear(),
    years = {};
  let startYear = 2019 - 20;
  while (startYear <= currentYear) {
    years[startYear] = startYear;
    startYear = startYear + 1;
  }

  return (
    <div className="form-group form-inline">
      <input
        type="text"
        className={classnames("form-control form-control-md mt-1", {
          "is-invalid": error
        })}
        placeholder="Search movies"
        name="title"
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
      &nbsp;
      <DropdownList
        prompt="Film type"
        items={{ movie: "Movie", series: "Series", episode: "Episode" }}
        value={type}
        onChange={onChange}
        name="type"
      />
      &nbsp;
      <DropdownList
        prompt="Release year"
        items={years}
        value={year}
        onChange={onChange}
        name="year"
      />
      &nbsp;
      <input type="submit" value="Search" className="btn btn-info mt-1" />
    </div>
  );
};

MovieSearch.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default MovieSearch;
