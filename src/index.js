const express = require('express');
const http = require('http');
const path = require('path');
const engine = require('ejs-mate');

const app = express();
const server = http.Server(app);


// settings
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');

// middlewares

// routes
app.use(require('./routes'));



// Static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
server.listen(3000, () => {
  console.log('Server on port', 3000);
});
