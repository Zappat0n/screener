import { quoteRequest, quotesRequest } from './requests';

async function query(request) {
  try {
    const response = await fetch(request);
    return response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function getQuote(ticker) {
  return await query(quoteRequest(ticker));
};

async function getQuotes(ticker) {
  return await query(quotesRequest(ticker));
};

export { getQuote, getQuotes }
