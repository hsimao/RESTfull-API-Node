const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A Order must have a name'],
    trim: true,
    maxlength: [40, 'A Order name must have less or equal then 40 characters'],
    minlength: [2, 'A Order name must have more or equal then 2 characters']
  },
  price: {
    type: Number,
    required: [true, 'A Order must have a price']
  },
  username: {
    type: String,
    required: [true, 'A Order must have username'],
    trim: true,
    maxlength: [
      40,
      'A Order username must have less or equal then 40 characters'
    ],
    minlength: [2, 'A Order username must have more or equal then 2 characters']
  },
  // 備註
  description: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
