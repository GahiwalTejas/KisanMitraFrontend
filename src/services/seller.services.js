import httpClient from '../http-common';

const getProduct = (userId) => {
  return httpClient.get(`/Products/${userId}`);
};

const createProduct = (newProduct) => {
  return httpClient.post('/Products', newProduct);
};

const GetProductByUserId = (productId) => {
  return httpClient.get(`/GetProductById/${productId}`);
};

const update = (data) => {
  return httpClient.put('', data);
};

const removeProductByUserId = (productId) => {
  return httpClient.delete(`Products/${productId}`);
};
export default { getProduct, createProduct, GetProductByUserId, update, removeProductByUserId };
