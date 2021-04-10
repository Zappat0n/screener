import { profileRequest, quoteRequest, quotesRequest } from './requests';

const displayError = (error) => {
  const container = document.querySelector('.errors');
  if (container.innerHTML === '') {
    const display = document.createElement('h5');
    display.innerText = error;
    container.appendChild(display);
    setTimeout(() => {
      const container = document.querySelector('.errors');
      container.innerHTML = '';
    }, 3000);
  }
};

async function query(request) {
  try {
    const response = await fetch(request);
    return response.json();
  } catch (error) {
    displayError(error);
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
