import axios from 'axios';

const prefixUrl = 'http://localhost:3002/api/v1/menu';
export const fetchMenu = async () => {
    try {
        const response = await axios.get(prefixUrl + '/all');
        return [response.data, null];
    } catch (error) {
        return [null, error.response.data];
    }
};

export const addMenuItem = async (menu) => {
    try {
        const response = await axios.post(prefixUrl, {
            ...menu,
        });
        return [response.data, null];
    } catch (error) {
        return [null, error.response.data];
    }
};
