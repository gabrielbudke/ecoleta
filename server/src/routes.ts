import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();

const pointsController = new PointsController();
const itemsController = new ItemsController();

/**
 *  URL: project/entity/action
 */
routes.get('/omnistack/items/getItems', itemsController.index);
routes.post('/omnistack/points/createPoint', pointsController.create);
routes.get('/omnistack/points/getPoints', pointsController.index);
routes.get('/omnistack/points/getPoints/:id', pointsController.show);

export default routes;