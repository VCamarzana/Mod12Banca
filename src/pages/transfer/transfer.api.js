import Axios from "axios";

const url = `${process.env.BASE_API_URL}/transfer`;

export const insertTransfer = transfer =>
    Axios.post(`${url}/${transfer.id}`, transfer).then(response => {
        return response.data;
    });

export const getTransfer = id =>
    Axios.get(`${url}/${id}`).then(response => {
        return response.data;
    });

