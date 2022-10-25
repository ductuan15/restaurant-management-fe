import axios from 'axios';

const prefixUrl = 'http://localhost:3002/api/v1/menu';
export const fetchMenu = async (page, limit) => {
    try {
        const response = await axios.get(prefixUrl + `/?page=${page}`);
        return [response.data, null];
    } catch (error) {
        return [null, error.response.data];
    }
};

export const fetchMenuItemById = async (menuItemId) => {
    try {
        const response = await axios.get(
            prefixUrl + '/item/?id=' + `${menuItemId}`
        );
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
