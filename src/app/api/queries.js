import { profileRequest, quoteRequest, quotesRequest } from './requests';

async function query(request) {
  try {
    const response = await fetch(request);
    return response.json();
  } catch (error) {
    return null;
  }
}

async function getQuote(ticker) {
  const request = quoteRequest(ticker);
  return query(request);
}

async function getQuotes(ticker) {
  return query(quotesRequest(ticker));
}

async function getProfile(ticker) {
  return query(profileRequest(ticker));
}

export { getProfile, getQuote, getQuotes };