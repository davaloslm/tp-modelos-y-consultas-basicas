const db = require("../database/models");
const { Op } = require('sequelize');

controller = {
    list: (req, res)=>{
        db.genres.findAll()
        .then(allMovies=>{
            res.render("genresList", {genres: allMovies})
        })
        .catch(error=>{
            console.log("Unable to find genres in database");
            res.send(error);
        })
    },
    genreDetails: (req,res)=>{
        db.genres.findByPk(parseInt(req.params.id))
        .then(genre=>{
            res.render("genresDetail", {genre})
        })
        .catch(error=>{
            console.log("Unable to find genres in database");
            res.send(error);
        })
    }
}

module.exports = controller