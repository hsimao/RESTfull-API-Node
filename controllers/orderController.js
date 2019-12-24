const Order = require('../models/orderModel');
const factory = require('./handlerFactory');

exports.updateOrder = factory.updateOne(Order);
exports.getAllOrder = factory.getAll(Order);
exports.createOrder = factory.createOne(Order);
exports.getOrder = factory.getOne(Order);
exports.deleteOrder = factory.deleteOne(Order);
