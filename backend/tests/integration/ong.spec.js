const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connections')

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  })

  it('shoud be able to create new ONG', async () => {
    const res = await request(app)
      .post('/ongs')
      .send({
        name: "Test2",
        email: "test@test.com",
        tel: "11999999999",
        city: "Logo Ali",
        uf: "AA"
      })

    expect(res.body).toHaveProperty('id');
    expect(res.body.id).toHaveLength(8);
  });
})