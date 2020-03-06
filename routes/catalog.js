var express = require('express');
var router = express.Router();

// Require controller modules
var book_controller = require('../controllers/bookController');
var author_controller = require('../controllers/authorController');
var genre_controller = require('../controllers/genreController');
var book_instance_controller = require('../controllers/bookInstanceController');

// BOOK ROUTES \\

// GET catalog home page
router.get('/', book_controller.index);

// GET request for creating a book
// this must come before routes that display book
router.get('/book/create', book_controller.book_create_get);

// POST request for creating a book
router.post('/book/create', book_controller.book_create_post);

// GET/POST request to delete book
router.get('/book/:id/delete', book_controller.book_delete_get);
router.post('/book/:id/delete', book_controller.book_delete_post);


// GET/POST request to update book
router.get('/book/:id/update', book_controller.book_update_get);
router.post('/book/:id/update', book_controller.book_update_post);

// GET request for one book
router.get('/book/:id', book_controller.book_detail);

// GET request for book list
router.get('/books', book_controller.book_list);



// AUTHOR ROUTES \\

// GET/POST create author
router.get('/author/create', author_controller.author_create_get);
router.post('/author/create', author_controller.author_create_post);

// GET/POST delete author
router.get('/author/:id/delete', author_controller.author_delete_get);
router.post('/author/:id/delete', author_controller.author_delete_post);

// GET/POST update author
router.get('/author/:id/update', author_controller.author_update_get);
router.post('/author/:id/update', author_controller.author_update_post);

// GET request for one author
router.get('/author/:id', author_controller.author_detail);

// GET request for author list
router.get('/authors', author_controller.author_list);



// GENRE ROUTES \\

// GET/POST create genre
router.get('/genre/create', genre_controller.genre_create_get);
router.post('/genre/create', genre_controller.genre_create_post);

// GET/POST delete genre
router.get('/genre/:id/delete', genre_controller.genre_delete_get);
router.post('/genre/:id/delete', genre_controller.genre_delete_post);

// GET/POST update genre
router.get('/genre/:id/update', genre_controller.genre_update_get);
router.post('/genre/:id/update', genre_controller.genre_update_post);

// GET request for one genre
router.get('/genre/:id', genre_controller.genre_detail);

// GET request for genre list
router.get('/genres', genre_controller.genre_list);



// BOOKINSTANCE ROUTES \\

// GET/POST create bookInstance
router.get('/bookinstance/create', book_instance_controller.bookinstance_create_get);
router.post('/bookinstance/create', book_instance_controller.bookinstance_create_post);

// GET/POST delete bookInstance
router.get('/bookinstance/:id/delete', book_instance_controller.bookinstance_delete_get);
router.post('/bookinstance/:id/delete', book_instance_controller.bookinstance_delete_post);

// GET/POST update bookInstance
router.get('/bookinstance/:id/update', book_instance_controller.bookinstance_update_get);
router.post('/bookinstance/:id/update', book_instance_controller.bookinstance_update_post);

// GET request for one bookInstance
router.get('/bookinstance/:id', book_instance_controller.bookinstance_detail);

// GET request for bookInstance list
router.get('/bookinstances', book_instance_controller.bookinstance_list);


module.exports = router;