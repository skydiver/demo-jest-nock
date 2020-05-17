const nock = require('nock');
const { requestUsers, requestPosts } = require('../request');

const logRequest = require('./nock-save-to-file');

nock.recorder.rec({
  output_objects: true,
  logging: logRequest,
  use_separator: false,
});

// nock('https://jsonplaceholder.typicode.com')
//   .get('/users')
//   .reply(200, sampleData)
//   .persist();

describe('testing using nock', () => {
  test('test users endpoint', async () => {
    const response = await requestUsers();
    expect(typeof response).toBe('object');
    expect(response.length).toBe(10);
  });

  test('test posts endpoint', async () => {
    const response = await requestPosts();
    expect(typeof response).toBe('object');
    expect(response.length).toBe(10);
  });

  test.skip('test user object', async () => {
    const response = await requestUsers();
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
