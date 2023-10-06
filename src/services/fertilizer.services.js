import httpClient from '../http-common';

const getAllFertilizer = () => {
  return httpClient.get('/ProductCategories/1');
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
export default { getAllFertilizer, create, get, update, remove };
