const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRouter = require('./routes/blogRoutes');
const { render } = require('ejs');


// anime js



// express app

const app = express();

// connect to MongoDB
const dbURI = 'mongodb+srv://netninja:test1234@cluster0.yr1lg.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// Register view engine
app.set('view engine', 'ejs');


// middleware & static files 

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));



app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.redirect('/blogs');

});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});
// blogs route

app.use('/blogs', blogRouter);

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});

