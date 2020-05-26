import { axiosInstance } from './axiosInstance';

function getBooks(name, orderValue, filter, languageRestriction, startIndex) {
    return axiosInstance.get('', {
        params: {
            q: name,
            orderBy: orderValue,
            filter: filter,
            langRestrict: languageRestriction,
            startIndex: startIndex
        }
    })
    .then((response) => {
        const res = JSON.parse(response.request.response);
        return res;
    })
    .catch((error) => {
        return Promise.reject(error);
    });
}

export {
    getBooks,
}