import axios from 'axios';

const BASE_URL = 'https://www.rijksmuseum.nl/api/en/collection?key=a7LmWCcH';

const instance = axios.create({
  responseType: 'json',
});

export const getArtCollections = (currentPage: number, pageSize: number) => instance
  .get(`${BASE_URL}&ps=${pageSize}&p=${currentPage}`)
  .then(resp => resp.data);

export const getInfo = (id: string) => instance
  .get(`https://www.rijksmuseum.nl/api/en/collection/${id}?key=a7LmWCcH`)
  .then(resp => resp.data);
