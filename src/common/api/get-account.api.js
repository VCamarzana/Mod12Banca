import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/account`;

export const getAccount = id =>
    Axios.get(`${url}/${id}`).then(response => {
        return response.data;
    });


