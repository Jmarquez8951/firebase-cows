import cowData from '../../helpers/data/cowData';
import util from '../../helpers/util';
import cowComponent from '../cow/cow';

const removeCow = (e) => {
  const cowId = e.target.closest('.card').id;
  console.error('cowId', cowId);
  cowData.deleteCow(cowId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildCows();
    })
    .catch((err) => console.error('could not delete cow', err));
};

const buildCows = () => {
  cowData.getCows()
    .then((cows) => {
      let domString = '';
      domString += '<h2 class="text-center">Pasture</h2>';
      domString += '<div class="d-flex flex-wrap">';
      cows.forEach((cow) => {
        domString += cowComponent.cowMaker(cow);
      });
      domString += '</div>';
      util.printToDom('pasture', domString);
      $('body').on('click', '.delete-cow', removeCow);
    })
    .catch((err) => console.error('getCows broke', err));
};

export default { buildCows };
