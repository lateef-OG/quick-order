const db = require('../models');
const mockData = require("../mockData/responses/menu.data");
const { getMenus, getMenu } = require("./menu.controller");

describe("Menu controller", () => {
    let res;
    let next;
    beforeEach(() => {
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        }
        next = jest.fn();
        jest.spyOn(db.Menu, "findAll").mockResolvedValue(mockData.menus);
        jest.spyOn(db.Menu, "findOne").mockResolvedValue(mockData.menu);
    });
    afterEach(() => {
        jest.resetAllMocks();
    });

    test("Get menu list", async () => {
        let req = {};
        await getMenus(req, res, next);
        expect(res.status).toBeCalledWith(200);
        expect(res.status().json).toBeCalledWith({ data: mockData.menus });
    });

    test("Get a single menu", async () => {
        let req = {
            params: {
                id: mockData.menu.data.id,
            }
        };
        await getMenu(req, res, next);
        expect(res.status).toBeCalledWith(200);
        expect(res.status().json).toBeCalledWith({ data: mockData.menu });
    });
})