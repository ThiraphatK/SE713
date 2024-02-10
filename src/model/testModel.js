const movies = require('../mock/moviesMock');

function getAllMovies() {
    return movies;
};

function getMovieByTitle(title) {   
    return movies.find(movie => movie.title === title);
};

function getMovieByRating(rating) {
    return movies.find(movie => movie.rating === rating);
}

function addMovie(movie) {
    movies.push(movie);
    return movie;
}

module.exports = {
    getAllMovies,
    getMovieByTitle,
    getMovieByRating,
    addMovie
};