import farmerData from '../../helpers/data/farmersData';
import util from '../../helpers/util';

const buildFarmer = (e) => {
  const farmerId = e.target.closest('.card').id;
  farmerData.getFarmerById(farmerId)
    .then((response) => {
      const singleFarmer = response.data;
      let domString = '';
      domString += '<h2 class="text-center">Featured Farmer</h2>';
      domString += '<div class="col-12">';
      domString += '<div class="card text-white bg-dark mb-3">';
      domString += `<div class="card-header">${singleFarmer.name}</div>`;
      domString += '<div class="card-body">';
      domString += `<p>${singleFarmer.age}</p>`;
      domString += '</div>';
      domString += '</div>';

      util.printToDom('single-farmer', domString);
    })
    .catch((err) => console.error('Problem loading in', err));
};

export default { buildFarmer };
