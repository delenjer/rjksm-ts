import axios from 'axios';

const BASE_URL = 'https://www.rijksmuseum.nl/api/en/collection?key=a7LmWCcH';

const instance = axios.create({
  responseType: 'json',
});

export const getArtCollections = (
  currentPage: number,
  pageSize: number,
  query: string,
  selectValue: string
) => instance
  .get(`${BASE_URL}&s=${selectValue}&ps=${pageSize}&p=${currentPage}&involvedMaker=${query}`)
  .then(resp => resp.data);

export const getInfo = (infoId: string) => instance
  .get(`https://www.rijksmuseum.nl/api/en/collection/${infoId}?key=a7LmWCcH`)
  .then(resp => resp.data);
