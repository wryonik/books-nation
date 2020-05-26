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

function getBookByNameOrderBy(name, orderValue) {
    return axiosInstance.get(`?q=${name}&orderBy=${orderValue}`)
    .then((response) => {
        const res = JSON.parse(response.request.response);
        return res;
    })
    .catch((error) => {
        return Promise.reject(error);
    });
}

export {
    getBookByName,
    getBookByNameOrderBy
}