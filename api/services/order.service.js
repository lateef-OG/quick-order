const db = require("../models/index");

const createOrder = async ({ order }) => {
  const Items = db.MenuItems;

  const result = await db.Order.create(
    order,
    {
      include: ['items']
    }
  );
  return result;
};

module.exports = {
  createOrder,
};