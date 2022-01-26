const db = require("../database/models");
const { Op } = require('sequelize');

controller = {
    list: (req, res)=>{
        db.movies.findAll()
        .then(allMovies=>{
            res.render("moviesList", {movies: allMovies})
        })
        .catch(error=>{
            console.log("Unable to find movies in database");
            res.send(error);
        })
    },
    newestMovies: (req, res)=>{
        db.movies.findAll({
            order: [
                ['release_date', 'DESC']
            ]
        })
        .then(movies=>{
            res.render("newestMovies", {movies})
        })
        .catch(error=>{
            console.log("Unable to find movies in database");
            res.send(error);
        })
    },
    recommended: (req, res)=>{
        db.movies.findAll({
            where: {
                rating: {[Op.gt]: 8},
                awards: {[Op.gt]: 2}
            },
            order: [
                ['rating', 'DESC']
            ]
        })
        .then(movies=>{
            res.render("recommendedMovies", {movies})
        })
        .catch(error=>{
            console.log("Unable to find movies in database");
            res.send(error);
        })
    },
    movieDetails: (req, res)=>{
        db.movies.findByPk(parseInt(req.params.id))
        .then(movie=>{
            res.render("moviesDetail", {movie})
        })
        .catch(error=>{
            console.log("Unable to find movies in database");
            res.send(error);
        })
    }
}

module.exports = controller