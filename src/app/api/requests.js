require('dotenv').config();

export const quoteRequest = (name) => new Request(
  `https://financialmodelingprep.com/api/v3/quote/${name}?apikey=${process.env.REACT_APP_API_KEY}`,
  {
    port: 443,
    method: 'GET'
  });

export const quotesRequest = (group) => new Request(
  `https://financialmodelingprep.com/api/v3/quotes/${group}?apikey=${process.env.REACT_APP_API_KEY}`,
  {
    port: 443,
    method: 'GET'
  });
