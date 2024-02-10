const express = require('express');
const router = express.Router();
const testModels = require('../model/testModel');

router.get('/:title', (req,res)=>{
    const title = req.params.title;
    if (title) {
        const movie = testModels.getMovieByTitle(title);
        if (!movie) {
            res.status(404).send('The movie with the given ID was not found');
        } else {
            res.send(movie);
        }
    }
});

router.get('/', (req,res)=>{
    const rating = req.query.rating;
    if (rating) {
        const movie = testModels.getMovieByRating(rating);
        if (!movie) {
            res.status(404).send('The movie with the given ID was not found');
        } else {
            res.send(movie);
        }
    } else {
        res.send(testModels.getAllMovies());
    }
});

router.post('/', (req,res)=>{
    const movie = req.body;
    const newMovie = testModels.addMovie(movie);
    res.send(newMovie);
});

module.exports = router;