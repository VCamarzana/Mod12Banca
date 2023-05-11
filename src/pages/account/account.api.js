import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/account`;

export const insertAccount = account =>
  Axios.post(`${url}/${account.id}`, account).then(response => {
    return response.data;
  });

export const updateAccount = account =>
  Axios.put(`${url}/${account.id}`, account).then(response => {
    return response.data;
  });
