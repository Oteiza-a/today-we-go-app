import axios from "axios"

axios.interceptors.request.use(function (config) {
  const token = process.env.REACT_APP_YELP_API_TOKEN
  config.headers.Authorization = `Bearer ${token}`;
  
  return config;
});

const proxyUrl = ""
// const proxyUrl = "https://damp-plains-18321.herokuapp.com/"
const apiUrl = `${proxyUrl}https://api.yelp.com`

export const getBusinesses = async (params) => {
  try {
    const res = await axios.get(`${apiUrl}/v3/businesses/search`, { params })
    return res?.data

  } catch (err) {
    console.error(err)
    return null
  }
}