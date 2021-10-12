// import axios from 'axios';
// const Axios = axios.create({
//   baseURL: 'https://as.mutualempressa.com/lekapora/public/api',
//   timeout: 1000,
//   headers: {
//     'X-Custom-Header': 'foobar',
//     'Content-Type': 'text/plain',
//   },
// });
// // Axios.defaults.headers.post['Content-Type'] =
// //   'application/x-www-form-urlencoded';

// export default Axios;

import axios from 'axios';
const baseDomain = 'https://as.mutualempressa.com/lekapora/public/api/'; // API for products
export const basePostUrl = 'https://beta.apinouthemes.com'; // API for post
export const baseStoreURL = 'https://beta.apinouthemes.com'; // API for vendor(store)

export const customHeaders = {
  Accept: 'application/json',
};

export const baseUrl = `${baseDomain}`;

export default axios.create({
  baseURL: baseUrl,
  headers: customHeaders,
});

export const serializeQuery = (query) => {
  return Object.keys(query)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`,
    )
    .join('&');
};
