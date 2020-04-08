const express = require("express");
const LessonsController = require("../controllers/LessonsController");
const HubsController = require("../controllers/HubsController");

const router = express.Router();

// API routes
// Lessons routes
router.post('/lessons', LessonsController.create);
router.get('/lessons', LessonsController.index);
router.get('/lessons/:id', LessonsController.show);
router.patch('/lessons/:id', LessonsController.update);
router.delete('/lessons/:id', LessonsController.delete);
// Hubs routes
router.post('/hubs', HubsController.create);
router.get('/hubs', HubsController.index);
router.get('/hubs/:id', HubsController.show);
router.patch('/hubs/:id', HubsController.update);
router.delete('/hubs/:id', HubsController.delete);

module.exports = router;
