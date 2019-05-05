import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MovieRow from "./MovieRow";
import MovieSearch from "./MovieSearch";
import isEmpty from "../../validation/is-empty";
import { movieDetails, searchMovies } from "../../actions/movieActions";

class MovieGrid extends Component {
  constructor() {
    super();
    this.state = {
      imdbId: "",
      type: "",
      title: "",
      poster: "",
      year: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (!isEmpty(this.props.cinema.movie)) {
      this.props.history.push("/movie-details");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!isEmpty(this.props.cinema.movie)) {
      this.props.history.push("/movie-details");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const movieData = {
      title: this.state.title,
      type: this.state.type,
      year: this.state.year
    };

    this.props.searchMovies(movieData);
  }

  render() {
    const { errors } = this.state;
    const movies = this.props.cinema.movies;
    let movieList = [];
    const movieRows = [];

    while (movies.length !== 0) {
      movieList.push(movies.shift());

      if (movieList.length === 4) {
        movieRows.push(movieList);
        movieList = [];
      } else if (movies.length === 0 && movieList.length < 4) {
        movieRows.push(movieList);
        movieList = [];
      }
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto">
            <form onSubmit={this.onSubmit}>
              <MovieSearch
                value={this.state.title}
                onChange={this.onChange}
                type={this.state.type}
                year={this.state.year}
                error={errors.Error}
              />
            </form>
          </div>
        </div>
        {movieRows.map((movieRow, index) => (
          <MovieRow key={index + 1} row={movieRow} />
        ))}
      </div>
    );
  }
}

MovieGrid.propTypes = {
  searchMovies: PropTypes.func.isRequired,
  movieDetails: PropTypes.func.isRequired,
  cinema: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  cinema: state.cinema,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { searchMovies, movieDetails }
)(MovieGrid);
