const db = require('../models');
const mockData = require("../mockData/responses/order.data");
const { createOrder } = require("./order.controller");

describe("Order controller", () => {
    let res;
    let next;
    beforeEach(() => {
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        }
        next = jest.fn();
        jest.spyOn(db.Order, "create").mockResolvedValue(mockData.orderPayload);
    });
    afterEach(() => {
        jest.resetAllMocks();
    });

    describe("Create order", () => {
        test("should create a new order", async () => {
            let req = {
                body: mockData.orderPayload
            };
            await createOrder(req, res, next);
            expect(res.status).toBeCalledWith(201);
            expect(res.status().json).toBeCalledWith(mockData.orderPayload);
        });
    });
})