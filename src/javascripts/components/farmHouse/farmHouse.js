import farmerData from '../../helpers/data/farmersData';
import utils from '../../helpers/util';
import farmersComponent from '../farmers/farmers';

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
    })
    .catch((err) => console.error('build farmers broke', err));
};

export default { buildFarmHouse };
