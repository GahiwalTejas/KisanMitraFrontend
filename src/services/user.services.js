import httpClient from '../http-common';

const getAll = () => {
  return httpClient.get('');
};

const login = (data) => {
  return httpClient.post('/Users/Login', data);
};

const registration = (data) => {
  return httpClient.post('Users/Registration',data);
};

const update = (data) => {
  return httpClient.put('', data);
};

const remove = (id) => {
  return httpClient.delete(`/${id}`);
};
export default { getAll, login, registration, update, remove };
