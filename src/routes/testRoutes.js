const express = require('express');
const router = express.Router();
const testModels = require('../model/testModel');

router.get('/all', (req,res)=>{
    const allMovies = testModels.getAllMovies();
    res.send(allMovies);
});

router.get('/:title', (req,res)=>{
    const title = req.params.title;
    if (title) {
        const movie = testModels.getMovieByTitle(title);
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

module.exports = router;