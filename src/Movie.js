import React from "react";
import propTypes from "prop-types";
import "./movie.css"

function Movie({year, title, summary, poster, genres}) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}></img>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genre">
                    {genres.map((genre, index) => (
                        <li key={index} className="movie__genre genre">{genre}</li>
                    ))}
                </ul>
                <p className="moveis__summary">{summary}</p>
            </div>
        </div>
    )
}


Movie.propTypes = {
    id: propTypes.number.isRequired,
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired,
}


export default Movie;