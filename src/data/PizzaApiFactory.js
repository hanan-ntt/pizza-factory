import fetchBackEndData from '../services/FetchBackendData';

const pizzaApiFactory = async (props) => {
    const response = await fetchBackEndData(props);
    return response;
};

export default pizzaApiFactory;