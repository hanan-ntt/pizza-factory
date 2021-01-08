import makeAPICall from '../services/MakeAPICall';

const getAPIData = async (props) => { 
    const response = await makeAPICall(props);
    const payload = await response;
    return payload;
};

export default getAPIData;