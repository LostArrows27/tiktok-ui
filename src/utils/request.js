import axios from 'axios';

const request = axios.create({
  baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (apiPath, option = {}) => {
  const res = await request.get(apiPath, option);
  return res.data;
};

export default request;
