const nock = require('nock');
const request = require('../request');

const sampleData = require('../sampleData.json');

nock('https://jsonplaceholder.typicode.com')
  .get('/users')
  .reply(200, sampleData);

describe('testing using nock', () => {
  test('test users endpoint', async () => {
    const response = await request();
    expect(typeof response).toBe('object');
    expect(response.length).toBe(10);
  });
});
