const express = require('express');
const exphbs = require('express-handlebars');

const PORT = 3000;
const app = express();

// setup 
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', './views');

// app use
app.use((req, res, next) => {
    console.log(`URL: ${req.url}`);
    req.myNmae = 'Megh';
    next();
});

// home route as default
app.get('/', (req, res) => {
    res.render('home');
});

// about route
app.get('/about', (req, res) => {
    res.render('about');
});

// to keep track of PORTS in console
app.listen(PORT, () => {
    console.log(`Server started on the port ${PORT}`)
})
