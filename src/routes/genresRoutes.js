const express = require('express');
const router = express.Router();
const {list, genreDetails} = require('../controllers/genresController');

router.get('/genres', list);
router.get('/genres/detail/:id', genreDetails);


module.exports = router;