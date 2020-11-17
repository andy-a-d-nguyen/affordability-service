/* eslint-disable no-undef */

// @jest-environment node

const axios = require('axios');

describe('API to DB', () => {
  it('should receive data from DB through API call', () => {
    axios.get('/dbs')
      .then((data) => expect(data.length).toEqual(100));
  });
});