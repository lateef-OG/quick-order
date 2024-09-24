const MenuService = require('../services/menu.service');

const getMenus = async (req, res) => {
  try {
    const menus = await MenuService.getMenus();
    res.status(200).json({ data: menus });
  } catch (error) {
    return next(error)
  }
}

const getMenu = async (req, res) => {
  try {
    const menu = await MenuService.getMenu({ id: req.params.id });
    if (menu) {
      res.status(200).json({ data: menu });
    } else {
      res.status(404).json({ message: "Item doesn't exist" });
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getMenus,
  getMenu,
}