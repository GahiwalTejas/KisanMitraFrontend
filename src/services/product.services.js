import httpClient from '../http-common';

const getProduct = (userId) => {
  return httpClient.get(`/Products/${userId}`);
};

const createProduct = (newProduct) => {
  return httpClient.post('/Products', newProduct);
};

const get = (id) => {
  return httpClient.get(`${id}`);
};

const update = (data) => {
  return httpClient.put('', data);
};

const removeProduct = (productId) => {
  return httpClient.delete(`Products/${productId}`);
};
export default { getProduct, createProduct, get, update, removeProduct };
