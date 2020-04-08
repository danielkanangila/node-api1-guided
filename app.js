const express = require("express")
const routes = require("./routes/index");

const app = express();

// Setting api routes
app.use('/api', routes);

module.exports = app;