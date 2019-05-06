import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MovieRating from "./MovieRating";
import MovieAbout from "./MovieAbout";
import { movieInfo } from "../../actions/movieActions";
import IsEmpty from "../../validation/is-empty";

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {}
    };
  }

  componentDidMount() {
    this.onMovieDetails();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onMovieDetails() {
    const movieData = { imdbId: this.props.match.params.id };
    this.props.movieInfo(movieData);
  }

  render() {
    // const { errors } = this.state;
    const { movie } = this.props.details;

    return (
      <div className="container">
        {!IsEmpty(movie) ? (
          <div className="row d-flex align-items-stretch">
            <div className="col-md-6 m-auto">
              <img
                src={movie.Poster}
                className="img-fluid"
                style={{ width: "18rem" }}
                alt={movie.Title}
              />
              <div className="row">
                <div className="col-md-6">
                  <p>
                    <strong>{movie.Title}</strong>
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    <small className="text-muted}">{movie.Type}</small>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2">
                  <p>
                    <strong>{movie.Year}</strong>
                  </p>
                </div>
                <div className="col-md-4">
                  <p>
                    <strong>{movie.Genre}</strong>
                  </p>
                </div>
                <div className="col-md-2">
                  <p>
                    <strong>{movie.Rated}</strong>
                  </p>
                </div>
                <div className="col-md-2">
                  <p>
                    <strong>{movie.Runtime}</strong>
                  </p>
                </div>
              </div>
              <MovieRating ratings={movie.Ratings} />
            </div>
            <div className="col-md-6 m-auto">
              <MovieAbout
                plot={movie.Plot}
                released={movie.Released}
                dvd={movie.DVD}
                language={movie.Language}
                country={movie.Country}
                boxOffice={movie.BoxOffice}
                actors={movie.Actors}
                directors={movie.Director}
                writer={movie.Writer}
                production={movie.Production}
                website={movie.website}
                awards={movie.Awards}
              />
            </div>
          </div>
        ) : (
          <p>Loading movie details...</p>
        )}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  movieInfo: PropTypes.func.isRequired,
  details: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  details: state.details,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { movieInfo }
)(withRouter(MovieDetails));
