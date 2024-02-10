const express = require('express');
const app = express();

app.use(express.json());

const movies = [
    {
        "title": "Interstellar",
        "genre": "Science Fiction",
        "releaseYear": 2014,
        "rating": "PG-13",
        "description": "A team of astronauts travel through a wormhole in search of a new home for humanity.",
        "country": "USA"
    },
    {
        "title": "The Shawshank Redemption",
        "genre": "Drama",
        "releaseYear": 1994,
        "rating": "R",
        "description": "A man wrongly convicted of murder finds hope and redemption within the walls of a prison.",
        "country": "USA"
    },
    {
        "title": "Spirited Away",
        "genre": "Animation",
        "releaseYear": 2001,
        "rating": "PG",
        "description": "A young girl enters a magical spirit world and must find a way to rescue her parents.",
        "country": "Japan"
    },
    {
        "title": "The Room",
        "genre": "Comedy-Drama",
        "releaseYear": 2003,
        "rating": "R",
        "description": "A melodramatic love triangle and questionable acting choices lead to one of the most unintentionally hilarious films ever made.",
        "country": "USA"
    },
    {
        "title": "Parasite",
        "genre": "Thriller",
        "releaseYear": 2019,
        "rating": "R",
        "description": "A poor family schemes their way into the lives of a wealthy household, with dark and unexpected consequences.",
        "country": "South Korea"
    }
];

function getAllMovies() {
    return movies;
};

function getMovieByTitle(title) {
    return movies.find(movie => movie.title === title);
};

function getMovieByRating(rating) {
    return movies.find(movie => movie.rating === rating);
}

app.get('/movies/all', (req,res)=>{
    const allMovies = getAllMovies();
    res.send(allMovies);
});

app.get('/movies/:title', (req,res)=>{
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

app.get('/movies', (req,res)=>{
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

app.listen(3000,()=>{
    console.log('Server is listeming posrt 3000!');
})