import httpClient from '../http-common';

const getCartByUserId = (userId) => {
  return httpClient.get(`/Carts/${userId}`);
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
export default { getCartByUserId, createCart, get, update, remove };
