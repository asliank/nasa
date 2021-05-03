import Axios from "axios";
const GET_API = async (url) => {
  return await Axios.get(url);
};
export default GET_API;
