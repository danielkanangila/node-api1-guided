import express from 'express';
import LessonsController from '../controllers/LessonsController';
import HubsController from '../controllers/HubsController';

const router = express.Router();

// API routes
// Lessons routes
router.get('/lessons', LessonsController.index.bind(LessonsController));
router.post('/lessons', LessonsController.create.bind(LessonsController));
router.get('/lessons/:id', LessonsController.show.bind(LessonsController));
router.patch('/lessons/:id', LessonsController.update.bind(LessonsController));
router.delete('/lessons/:id', LessonsController.delete.bind(LessonsController));
// Hubs routes
router.post('/hubs', HubsController.create.bind(HubsController));
router.get('/hubs', HubsController.index.bind(HubsController));
router.get('/hubs/:id', HubsController.show.bind(HubsController));
router.patch('/hubs/:id', HubsController.update.bind(HubsController));
router.delete('/hubs/:id', HubsController.delete.bind(HubsController));

export default router;
