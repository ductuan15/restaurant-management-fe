import axios from 'axios';

const prefixUrl = 'http://localhost:3002/api/v1/bill';
export const fetchBill = async () => {
    try {
        const response = await axios.get(prefixUrl);
        return [response.data, null];
    } catch (error) {
        return [null, error.response.data];
    }
};

export const fetchBillById = async (billId) => {
    try {
        const response = await axios.get(prefixUrl + `/detail?id=${billId}`);
        return [response.data, null];
    } catch (error) {
        return [null, error.response.data];
    }
};

export const updateBillStatus = async (billId) => {
    try {
        const response = await axios.put(prefixUrl + `/confirm`, {
            id: billId,
        });
        return [response.data, null];
    } catch (error) {
        return [null, error.response.data];
    }
};

export const removeMenuIdFromBill = async (billId, menuId) => {
    console.log(billId);
    console.log(menuId);
    try {
        const response = await axios.delete(prefixUrl + '/billdetail', {
            data: {
                menuId: menuId,
                billId: billId,
            },
        });
        return [response.data, null];
    } catch (error) {
        return [null, error.response.data];
    }
};

export const fetchNotPaidBills = async () => {
    try {
        const response = await axios.get(prefixUrl + '/false-status');
        return [response.data, null];
    } catch (error) {
        return [null, error.response.data];
    }
};
// {
//     menuItemOrder: {
//          menuId: number
//          quantity: number
//     }
// }
export const createBill = async (menuItemOrders, menuId) => {
    try {
        if (menuId == 0) {
            const response = await axios.post(prefixUrl, {
                items: menuItemOrders,
            });
            return [response.data, null];
        } else {
            const response = await axios.put(prefixUrl, {
                billId: menuId,
                menuId: menuItemOrders[0].menuId,
                quantity: menuItemOrders[0].quantity,
            });
            return [response.data, null];
        }
    } catch (error) {
        return [null, error.response.data];
    }
};
