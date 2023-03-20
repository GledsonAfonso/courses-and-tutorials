const { request } = require('axios');

const _headers = {
  'content-type': 'application/json'
};

const get = async (url) => {
  const options = {
    url,
    option: 'GET',
    headers: _headers
  };

  const response = await request(options);

  if (response.data) {
    return response.data;
  } else {
    return undefined;
  }
};

module.exports = { get };