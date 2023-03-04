import axios from 'axios';

const request = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (apiPath, option = {}) => {
  const res = await request.get(apiPath, option);
  return res.data;  
};

export default request;
