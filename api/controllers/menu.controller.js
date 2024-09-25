const MenuService = require('../services/menu.service');

const getMenus = async (req, res) => {
  try {
    const menus = await MenuService.getMenus();
    res.status(200).json({ data: menus });
  } catch (error) {
    return next(error)
  }
}

const getMenu = async (req, res, next) => {
  try {
    const menu = await MenuService.getMenu({ id: req.params.id });
    if (menu) {
      res.status(200).json({ data: menu });
    } else {
      const error = new Error("Restaurant with provided id doesn't exist");
      error.status = 404;
      next(error);
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getMenus,
  getMenu,
}