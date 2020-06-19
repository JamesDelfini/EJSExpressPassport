const express = require('express');
const { render } = require('ejs');
const app = express();

const users = [];

app.set('view-engine', 'ejs');
app.use(express.urlencoded({ extended: false })) // Take forms and access them in req variable in POST HTTP Methods

app.get('/', (req, res) => {
    res.render('index.ejs', { name: 'Delfini' });
});

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.post('/login', (req, res) => {

});

app.get('/register', (req, res) => {
    res.render('register.ejs');
});

app.post('/register', (req, res) => {

});

app.listen(5000, () => console.log('Server Running'));