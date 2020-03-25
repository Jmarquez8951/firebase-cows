import smash from '../../helpers/data/smash';
import util from '../../helpers/util';

const buildFarmer = (e) => {
  const farmerId = e.target.closest('.card').id;
  smash.getSingleFarmerWithCows(farmerId)
    .then((singleFarmer) => {
      console.error('single Farmer', singleFarmer);
      let domString = '';
      domString += '<h2 class="text-center">Featured Farmer</h2>';
      domString += '<div class="col-12">';
      domString += '<div class="card text-white bg-dark mb-3">';
      domString += `<div class="card-header">${singleFarmer.name} (age: ${singleFarmer.age})</div>`;
      domString += '<div class="card-body">';
      domString += '<p></p>';
      domString += '</div>';
      domString += '</div>';

      util.printToDom('single-farmer', domString);
    })
    .catch((err) => console.error('Problem loading in', err));
};

export default { buildFarmer };
