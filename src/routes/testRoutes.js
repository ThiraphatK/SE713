const express = require('express');
const router = express.Router();
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

router.get('/all', (req,res)=>{
    const allMovies = getAllMovies();
    res.send(allMovies);
});

router.get('/:title', (req,res)=>{
    const title = req.params.title;
    if (title) {
        const movie = getMovieByTitle(title);
        if (!movie) {
            res.status(404).send('The movie with the given ID was not found');
        } else {
            res.send(movie);
        }
    } else {
        res.send(movies);
    }
});

router.get('/', (req,res)=>{
    const rating = req.query.rating;
    if (rating) {
        const movie = getMovieByRating(rating);
        if (!movie) {
            res.status(404).send('The movie with the given ID was not found');
        } else {
            res.send(movie);
        }
    } else {
        res.send(movies);
    }
});

module.exports = router;