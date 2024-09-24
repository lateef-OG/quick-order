const OrderService = require('../services/order.service');

const createOrder = async (req, res, next) => {
  const { items } = req.body;
  if (!items || items.length === 0) {
    return res.status(400).json({
      message: "Validation errors",
      errors: ["Order must have at least one item"]
    })
  };
  try {
    const order = await OrderService.createOrder({ order: req.body, next });
    res.status(201).json(order);
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({
        message: "Validation errors",
        errors: error.errors.map(e => e.message)
      })
    };
  }
}

module.exports = {
  createOrder
}