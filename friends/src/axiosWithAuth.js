import axios from 'axios';

export const axiosWithAuth = () => {

    const token = localStorage.getItem('token');
    return axios.create({
        headers: {
            Authorization: token,
        },
    });
};

// token is sent along with get or post api requests for authorization