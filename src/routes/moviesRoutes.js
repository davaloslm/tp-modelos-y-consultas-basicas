const express = require('express');
const router = express.Router();
const {list, newestMovies, recommended, movieDetails} = require('../controllers/moviesController');

router.get('/movies', list);
router.get('/movies/new', newestMovies);
router.get('/movies/recommended', recommended);
router.get('/movies/detail/:id', movieDetails);


module.exports = router;