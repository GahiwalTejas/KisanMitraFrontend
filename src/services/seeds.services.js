import httpClient from '../http-common';

const getAllSeeds = () => {
  return httpClient.get('/ProductCategories/4');
};

const create = (data) => {
  return httpClient.post('', data);
};

const get = (id) => {
  return httpClient.get(`${id}`);
};

const update = (data) => {
  return httpClient.put('', data);
};

const remove = (id) => {
  return httpClient.delete(`/${id}`);
};
export default { getAllSeeds, create, get, update, remove };
