import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getFarmers = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/farmers.json`)
    .then((response) => {
      const theFarmers = response.data;
      const farmers = [];
      Object.keys(theFarmers).forEach((farmerId) => {
        theFarmers[farmerId].id = farmerId;
        farmers.push(theFarmers[farmerId]);
      });

      resolve(farmers);
    })
    .catch((err) => reject(err));
});

const getFarmerById = (farmerId) => axios.get(`${baseUrl}/farmers/${farmerId}.json`);

export default { getFarmers, getFarmerById };
