// IMPORT PACKAGES
const express = require('express');
const morgan = require('morgan');

// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express();
const PORT = 5005;

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests
app.use(express.static('public'));
app.use(express.json());
app.use(morgan('dev'));

// ROUTES
// Start defining your routes here:

// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
