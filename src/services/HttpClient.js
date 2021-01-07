import axios from 'axios';

const MakeApiCall = async (url) => {
    try {
        const res = await axios.get(url)
        return res.data
    } catch (error) {
        return 'oooh no, something went wrong.'
    }
}

export {MakeApiCall};