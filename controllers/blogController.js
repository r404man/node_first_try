const Blog = require('../models/blog');

const blog_index = function (req, res) {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            // console.log(result);
            res.render('index', { title: 'All new blogs', blogs: result });
        })
        .catch((err) => {
            console.log(err);
        });
}

const blog_body = function (req, res) {
    const blog = new Blog(req.body);
    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((err) => {
            console.log(err);
        });
}

const blog_create = function (req, res) {
    res.render('create', { title: 'Create' });
}

const blog_details = function (req, res) {
    const id = req.params.id;
    Blog.findById(id)
        .then((result) => {
            res.render('details', { blog: result, title: 'blog details' });
        })
        .catch((err) => {
            console.log(err);
            res.status(404).render('404', { title: '404 page' });
        });
}

const blog_delete = function (req, res) {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: '/blogs' });
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = {
    blog_index,
    blog_body,
    blog_create,
    blog_details,
    blog_delete,
}