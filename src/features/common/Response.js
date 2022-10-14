export const parseResponse = (response) => {
    if(response.status == 200){
        return [response.data, null];
    }
    return [null, response.data]
}