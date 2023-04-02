const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '34993491-75f64346bf709c0012e47f9c8';

function fetchQuery(searchQuery, page) {
  return fetch(
    `${BASE_URL}/?key=${API_KEY}&q=${searchQuery}
      &image_type=photo&orientation=horizontal&page=
      ${page}&per_page=12`
  ).then(response => response.json());
}

const api = { fetchQuery };

export default api;