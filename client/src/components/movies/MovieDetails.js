import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MovieRating from "./MovieRating";
import MovieAbout from "./MovieAbout";
import { movieInfo } from "../../actions/movieActions";

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      errors: {}
    };
  }

  componentDidMount() {
    //
  }

  fillMovieDetails() {
    const movieData = { imdbId: this.props.match.params.id };
    this.props.movieInfo(movieData);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    //const { errors } = this.state;
    this.fillMovieDetails();
    const movie = this.props.cinema.movie;

    console.log(movie);

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 m-auto">
            <img
              src={movie.Poster}
              className="img-fluid"
              style={{ width: "40rem", height: "18rem" }}
              alt={movie.Title}
            />
            <div className="row d-flex align-items-stretch">
              <div className="col-md-3 d-flex align-items-stretch br-1">
                <p>
                  <strong>{movie.Title}</strong>
                </p>
              </div>
              <div className="col-md-3 d-flex align-items-stretch">
                <p>
                  <small className="text-muted}">{movie.Title}</small>
                </p>
              </div>
            </div>
            <div className="row d-flex align-items-stretch">
              <div className="col-md-3 d-flex align-items-stretch br-1">
                <p>
                  <strong>{movie.Year}</strong>
                </p>
              </div>
              <div className="col-md-3 d-flex align-items-stretch br-1">
                <p>
                  <strong>{movie.Genre}</strong>
                </p>
              </div>
              <div className="col-md-3 d-flex align-items-stretch br-1">
                <p>
                  <strong>{movie.Rated}</strong>
                </p>
              </div>
              <div className="col-md-3 d-flex align-items-stretch">
                <p>
                  <strong>{movie.Runtime}</strong>
                </p>
              </div>
            </div>
            <MovieRating ratings={movie.Ratings} />
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
      </div>
    );
  }
}

MovieDetails.propTypes = {
  movieInfo: PropTypes.func.isRequired,
  cinema: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  cinema: state.cinema,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { movieInfo }
)(withRouter(MovieDetails));
