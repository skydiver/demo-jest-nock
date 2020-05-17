const request = require('../request');

describe('testing using nock', () => {
  test('test users endpoint', async () => {
    const response = await request();
    expect(typeof response).toBe('object');
    expect(response.length).toBe(10);
  });
});
