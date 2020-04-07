import cowData from '../../helpers/data/cowData';
import util from '../../helpers/util';
import cowComponent from '../cow/cow';
import smashData from '../../helpers/data/smash';
import newCowComponent from '../newCow/newCow';

const removeCow = (e) => {
  const cowId = e.target.closest('.card').id;
  console.error('cowId', cowId);
  smashData.completelyRemoveCow(cowId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildCows();
      util.printToDom('single-farmer', '');
    })
    .catch((err) => console.error('could not delete cow', err));
};

const buildCows = () => {
  cowData.getCows()
    .then((cows) => {
      let domString = '';
      domString += '<h2 class="text-center">Pasture</h2>';
      domString += '<button id="show-add-cow-form" class="btn btn-success"><i class="fas fa-plus"></i></button>';
      domString += '<div class="d-flex flex-wrap">';
      cows.forEach((cow) => {
        domString += cowComponent.cowMaker(cow);
      });
      domString += '</div>';
      util.printToDom('pasture', domString);
      $('body').on('click', '.delete-cow', removeCow);
      $('#show-add-cow-form').click(newCowComponent.showForm);
    })
    .catch((err) => console.error('getCows broke', err));
};

export default { buildCows };
