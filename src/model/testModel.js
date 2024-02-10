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

module.exports = {
    getAllMovies,
    getMovieByTitle,
    getMovieByRating,
};