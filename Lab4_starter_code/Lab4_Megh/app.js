const express = require('express');
const exphbs = require('express-handlebars');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const Animal = require('./model/Animal');

dotenv.config({ path: './process.env' });



const DB_CONN_STR = process.env.CONNECTION_STRING.replace('<password>', process.env.DB_PASSWORD);

mongoose.connect(DB_CONN_STR, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
.then(() => console.log("Database Connection Successful!"))
.catch((err) => console.log(`DB Connection ERROR: ${err}`));




const app = express();


// Set up routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});


// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
