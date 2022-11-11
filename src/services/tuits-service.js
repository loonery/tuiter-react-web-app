import axios from 'axios';

// TUITS_API is a constant referring to our middle tier
const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;

// the asynchronous functions take advantage of multi-threading capability
export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
}
export const findTuits = async () => {
    const response = await axios.get(TUITS_API);
    const tuits = response.data;    // data in this response is the tuits array
    return tuits;                   // return the tuits array
}

export const deleteTuit = async (tid) => {
    const response = await axios.delete(`${TUITS_API}/${tid}`)
    return response.data
}

export const updateTuit = async (tuit) => {
    const response = await axios.put(`${TUITS_API}/${tuit._id}`, tuit)
    return tuit;
}