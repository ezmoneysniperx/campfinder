const express = require('express');
const catchAsync = require("../utils/CatchAsync");
const router = express.Router();
const campgrounds = require('../controllers/campgrounds');
const {isLoggedIn, isAuthor, validateCampground} = require("../middleware");
const multer  = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

router.route('/')
    .get( catchAsync(campgrounds.index))
    .post( isLoggedIn, upload.array('image'), validateCampground, catchAsync(campgrounds.createCampground))


router.get('/new', isLoggedIn, campgrounds.renderNewForm)

router.get('/search', catchAsync( campgrounds.search ));

router.route('/:id')
    .get( catchAsync(campgrounds.showCampground))
    .put( isLoggedIn, upload.array('image'), isAuthor, validateCampground, catchAsync(campgrounds.updateCampground))
    .delete( isLoggedIn, isAuthor, catchAsync(campgrounds.deleteCampground))

router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(campgrounds.renderEditForm))





module.exports = router;