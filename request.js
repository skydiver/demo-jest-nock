const rp = require('request-promise');

const requestUsers = async () => {
  const response = await rp('https://jsonplaceholder.cypress.io/users', {
    json: true,
  });
  return response;
};

const requestPosts = async () => {
  const response = await rp(
    'https://jsonplaceholder.cypress.io/posts?_start=0&_limit=10',
    {
      json: true,
    }
  );
  return response;
};

module.exports = { requestUsers, requestPosts };
