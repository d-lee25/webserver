const controllers = require('../controllers/items.controller');
const express = require('express');

const itemsRoutes = express.Router();
/**
 * Express routes for Items.
 *
 * RESTful endpoints make for easily adding to existing API features.
 */

/**
 * Routes for all Items.
 */
itemsRoutes.get('/', controllers.getAllItems).post('/', controllers.createItem);

/**
 * Routes for a item by id.
 */
itemsRoutes
  .get('/:itemId', controllers.getItem) // GET http://locahost:3000/tasks/1
  .put('/:itemId', controllers.updateItem)
  .delete('/:itemId', controllers.deleteItem);

module.exports = itemsRoutes;
