import { axiosInstance } from './axiosInstance';

function getBookByName(name) {
    return axiosInstance.get(`?q=${name}`)
    .then((response) => {
        const res = JSON.parse(response.request.response);
        return res;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

export {
    getBookByName
}