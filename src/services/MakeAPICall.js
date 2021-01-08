import axios from 'axios';

const makeAPICall = async (url) => {
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (error) {
        console.log("Error: ", error);
        return 'oooh no, something went wrong.';
    }
}

export default makeAPICall;