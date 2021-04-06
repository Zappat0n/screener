import { quoteRequest, quotesRequest } from './requests';

async function query(request) {
  try {
    const response = await fetch(request);
    return response.json();
  } catch (error) {
    return null;
  }
}

async function getQuote(ticker) {
  return query(quoteRequest(ticker));
}

async function getQuotes(ticker) {
  return query(quotesRequest(ticker));
}

export { getQuote, getQuotes };
