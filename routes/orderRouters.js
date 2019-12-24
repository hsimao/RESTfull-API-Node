const express = require('express');
const orderController = require('../controllers/orderController');

const Router = express.Router();

Router.route('/')
  .get(orderController.getAllOrder)
  .post(orderController.createOrder);

Router.route('/:id')
  .get(orderController.getOrder)
  .patch(orderController.updateOrder)
  .delete(orderController.deleteOrder);

module.exports = Router;
