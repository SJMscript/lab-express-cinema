const express = require('express');
const router = express.Router();

const Movie = require("../models/Movie.model")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res, next) => {
    Movie.find()
    .then((response) =>{
        console.log(response)
        res.render("movies.hbs", {
            allMovies: response
        })

    })
    .catch((err) =>{
        console.log(err)
    })

})

router.get("/movies/:id", (req, res, next) => {
    Movie.findById(req.params.id)
    .then((response) => {
        console.log(response)
        res.render("movie-by-id.hbs", {
            particularMovie: response
        })
    })
    .catch((err) => {
        console.log(err)
    })
})


module.exports = router;
