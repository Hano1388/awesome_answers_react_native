const BASE_URL = 'http://localhost:3000/api/v1';
const API_KEY = '35ca420a09c683b3bd37daec102a9524b0cd211bddcab0168cdfa9f577b1a650';

export function deleteQuestion (id) {
  const headers = new Headers({
    'Authorization':`Apikey ${API_KEY}`
  });
  return fetch(`${BASE_URL}/questions/${id}`, {
    method: 'DELETE',
    headers
  })
    .then(res => res.json());
}


export function postQuestion (data) {
  const headers = new Headers({
    'Authorization':`Apikey ${API_KEY}`,
    'Content-Type':'application/json'
  });
  return fetch(`${BASE_URL}/questions`, {
    method: 'POST',
    body: JSON.stringify({question: data}),
    headers
  })
    .then(res => res.json());
}

export function getQuestions () {
  const headers = new Headers({
    'Authorization':`Apikey ${API_KEY}`
  });
  return fetch(`${BASE_URL}/questions`, {headers})
    .then(res => res.json());
}

export function getQuestion (id) {
  const headers = new Headers({
    'Authorization':`Apikey ${API_KEY}`
  });
  return fetch(`${BASE_URL}/questions/${id}`, {headers})
  // A better practice when handling response from fetch
  // is to check its status if it was successful (Status: 200 OK)
  // before parsing as json with (res.json()).
    .then(res => res.json());
}
