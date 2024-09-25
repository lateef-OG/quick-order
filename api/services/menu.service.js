const db = require("../models/index");

const getMenus = async () => {
  try {
    const menus = await db.Menu.findAll({
      attributes: ['id', 'name', 'description'],
      include: {
        model: db.MenuItem,
        as: 'items',
        attributes: ['id', 'name', 'description', 'ingredients', 'calories', 'price', 'menuId'],
      }
    });
    return menus;
  } catch (error) {
    console.log(error);
  }
};

const getMenu = async ({ id }) => {
  try {
    const menu = await db.Menu.findOne({
      where: { id },
      attributes: ['id', 'name', 'description'],
      include: {
        model: db.MenuItem, as: 'items',
        attributes: ['id', 'name', 'description', 'ingredients', 'calories', 'price', 'menuId'],
      }
    });
    return menu;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getMenus,
  getMenu,
};