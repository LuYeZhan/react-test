const axios = require('axios').default;
const baseUrl = 'https://api.github.com/search/users';

export const requestUsersData = (value) => {
  const q = value;
  return axios.get(baseUrl, {
    params: {
      q,
    },
  });
};

export default requestUsersData;
