import farmerData from '../../helpers/data/farmersData';
import farmersComponent from '../farmers/farmers';
import singleFarmer from '../singleFarmer/singleFarmer';
import utils from '../../helpers/util';

const buildFarmHouse = () => {
  farmerData.getFarmers()
    .then((farmers) => {
      let domString = '';
      domString += '<h2 class="text-center">Farm House</h2>';
      domString += '<div class="d-flex flex-wrap">';
      farmers.forEach((farmer) => {
        domString += farmersComponent.buildFarmers(farmer);
      });
      domString += '</div>';
      utils.printToDom('farmHouse', domString);
      $('body').on('click', '.farmer-card', singleFarmer.buildFarmer);
    })
    .catch((err) => console.error('build farmers broke', err));
};

export default { buildFarmHouse };
