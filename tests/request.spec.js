const { requestUsers, requestPosts } = require('../request');

const {
  startNockRecording,
  storeNockRecordings,
  playbackNockTapes,
} = require('./nock-helpers');

describe('testing using nock', () => {
  beforeAll(() => {
    // startNockRecording();
    // playbackNockTapes('./tape.json');
  });

  afterAll(() => {
    // storeNockRecordings('./tape.json');
  });

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
