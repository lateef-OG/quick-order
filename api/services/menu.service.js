const db = require("../models/index");

const getMenus = async () => {
	try {
		const menus = await db.Menu.findAll({
			include: { model: db.MenuItem, as: 'items' }
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
			include: { model: db.MenuItem, as: 'items' }
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