const express = require('express');
const blogController = require('../controllers/blogController');
const { models } = require('mongoose');
const { blog_body } = require('../controllers/blogController');


const router = express.Router();

router.get('/', blogController.blog_index);

router.post('/', blogController.blog_body);

router.get('/create', blogController.blog_create);

router.get('/:id', blogController.blog_details);

router.delete('/:id', blogController.blog_delete);




module.exports = router;