const nock = require('nock');
const request = require('../request');

const sampleData = require('../sampleData.json');

nock('https://jsonplaceholder.typicode.com')
  .get('/users')
  .reply(200, sampleData)
  .persist();

describe('testing using nock', () => {
  test('test users endpoint', async () => {
    const response = await request();
    expect(typeof response).toBe('object');
    expect(response.length).toBe(10);
  });

  test('test user object', async () => {
    const response = await request();
    const userPosition = Math.floor(Math.random() * 10);
    const user = response[userPosition];

    expect(user).toMatchObject({
      id: expect.any(Number),
      name: expect.any(String),
      address: expect.any(Object),
      company: {
        name: expect.any(String),
        catchPhrase: expect.any(String),
        bs: expect.any(String),
      },
    });
  });
});
