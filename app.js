// Require middleware libraries
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

// The Default Express Handlebars file extention is .handlebars
// This makes is so we can just use .hbs 
app.engine('hbs', exphbs( {extname: '.hbs' }));
// Set view engine to Express Handlebars
app.set('view engine', 'hbs');

// All POST and GET requests made to the server to to the main router defined here
// All the routing is handled here
const routes = require('./server/router/mainRouter');
app.use('/', routes);

// Make app listen on port 8000 on http://localhost
app.listen(8000);
console.log('listening on port 8000')