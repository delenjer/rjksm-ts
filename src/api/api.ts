import axios from 'axios';

const BASE_URL = 'https://www.rijksmuseum.nl/api/en/collection?key=a7LmWCcH';

const instance = axios.create({
  responseType: 'json',
});

export const getArtCollections = () => instance
  .get(`${BASE_URL}`)
  .then(resp => resp.data);
