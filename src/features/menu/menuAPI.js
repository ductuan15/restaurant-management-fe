import axios from 'axios';

const prefixUrl = 'http://localhost:3002/api/v1/menu';
export const fetchMenu = async (page, key, priceRange, type) => {
    try {
        console.log(priceRange);
        const filterParams = new URLSearchParams({
            page,
            key,
            from: priceRange[0],
            to: priceRange[1],
        });
        if (type) filterParams.set('type', type);
        const response = await axios.get(
            prefixUrl + `/filter/?` + filterParams
        );
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
export const updateMenuItem = async (menuItem) => {
    try {
        const response = await axios.put(prefixUrl, {
            ...menuItem,
        });
        return [response.data, null];
    } catch (error) {
        return [null, error.response.data];
    }
};
