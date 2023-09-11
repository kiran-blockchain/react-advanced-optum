import axios from "axios"

export const getApi = async (url) => {
    try {
        const result = await axios.get(url);
        return result.data;
    } catch (err) {
        return "Error in fetching the data"
    }
}

export const postApi = async (url,payload) => {
    try {
        const result = await axios.get(url,payload);
        return result.data;
    } catch (ex) {
        return "Error in fetching the data"
    }
}