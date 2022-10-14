import axios from "axios";
import { parseResponse } from "../common/Response";

const prefixUrl = "https://dummyjson.com/users/";
export const fetchProfile = async (id) => {
    try{
        const response = await axios.get(prefixUrl + id);
        return [response.data, null];
    }catch(err){
        return [null, err.response.data]
    }
};
