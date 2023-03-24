// requires

const express = require('express')
const exphbs = require('express-handlebars')
const dotenv = require('dotenv')

// pre-app config
dotenv.config({ path: './process.env' })
const PORT = process.env.PORT;

// create the app
const app = express();

app.engine('.hbs', exphbs.engine({defaultLayout: 'main', partialsDir: './views/partials', extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './views')

app.use('/',require('./routes/user'))

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})


