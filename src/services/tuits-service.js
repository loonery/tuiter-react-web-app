import axios from 'axios';
const TUITS_API = 'http://localhost:4000/api/tuits';    // TUITS_API is a constant referring to our middle tier

// the asynchronous functions take advantage of multi-threading capability
export const createTuit = async (tuit) => {}

export const findTuits = async () => {
    const response = await axios.get(TUITS_API);
    const tuits = response.data;    // data in this response is the tuits array
    return tuits;                   // return the tuits array
}

export const deleteTuit = async (tuit) => {}

export const updateTuit = async (tuit) => {}