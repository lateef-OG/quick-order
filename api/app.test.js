const request = require('supertest');
const app = require('./app');
const db = require('./models');

describe('Test application', () => {
  test('Not found for 404', async () => {
    const res = await request(app).get('/wrong-endpoint');
    expect(res.statusCode).toEqual(404);
  })

  test('Menu route returns valid response', async () => {
    const res = await request(app).get('/api/menu');
    expect(res.statusCode).toEqual(200);
  })
})

afterAll(async () => {
  await db.sequelize.close();
})