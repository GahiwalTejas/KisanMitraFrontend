import httpClient from '../http-common';

const getSeller = () => {
  return httpClient.get('Admin/GetUsers');
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

const removeSeller = (userId) => {
  return httpClient.delete(`Admin/DeleteUser/${userId}`);
};
export default { getSeller, createCart, get, update, removeSeller };
