import axios from 'axios';

const prefixUrl = 'http://localhost:3002/api/v1/bill/all';
export const fetchBill = async () => {
    try {
        const response = await axios.get(prefixUrl);
        return [response.data, null];
    } catch (error) {
        return [null, error.response.data];
    }
};
