const rp = require('request-promise');

const request = async () => {
  const response = await rp('https://jsonplaceholder.typicode.com/users', {
    json: true,
  });
  return response;
};

module.exports = request;
