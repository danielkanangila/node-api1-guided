const express = require("express")
const LessonsController = require("./controllers/LessonsController");
const HubsController = require("./controllers/HubsController");

const app = express();

// Lessons routes
app.post('/api/lessons', LessonsController.create);
app.get('/api/lessons', LessonsController.index);
app.get('/api/lessons/:id', LessonsController.show);
app.patch('/api/lessons/:id', LessonsController.update);
app.delete('/api/lessons/:id', LessonsController.delete);
// Hubs routes
app.post('/api/hubs', HubsController.create);
app.get('/api/hubs', HubsController.index);
app.get('/api/hubs/:id', HubsController.show);
app.patch('/api/hubs/:id', HubsController.update);
app.delete('/api/hubs/:id', HubsController.delete);

module.exports = app;