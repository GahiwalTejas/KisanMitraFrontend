import httpClient from '../http-common';

const getCart = () => {
  return httpClient.get('Products');
};

const createCart = (data) => {
  return httpClient.post('/Carts',data);
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
export default { getCart, createCart, get, update, remove };
