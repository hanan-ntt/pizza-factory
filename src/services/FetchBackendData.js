import axios from "axios";

/** 
 * @name Fetch Backend Data
 * @requires Axios, a JS package to make API Calls
 * @returns dataset for concerned user
 */


const fetchBackEndData = async (props) => {
  try {
    const url = `https://run.mocky.io/${props}`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    return "oooh no, something went wrong.";
  }
};

export default fetchBackEndData;
