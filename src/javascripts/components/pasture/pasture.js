import cowData from '../../helpers/data/cowData';
import util from '../../helpers/util';
import cowComponent from '../cow/cow';
import smashData from '../../helpers/data/smash';
import newCowComponent from '../newCow/newCow';
import farmerCowData from '../../helpers/data/farmerCowData';

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

const makeACow = (e) => {
  e.preventDefault();
  // Create new cow object
  const newCow = {
    name: $('#cow-name').val(),
    breed: $('#cow-breed').val(),
    location: $('#cow-location').val(),
    weight: $('#cow-weight').val() * 1,
  };
  // save to firebase
  cowData.addCow(newCow)
    .then(() => {
      // reprint cows
      // eslint-disable-next-line no-use-before-define
      buildCows();
      util.printToDom('new-cow', '');
    })
    .catch((err) => console.error(err));

  console.error('newCow', newCow);
};

const farmerCowController = (e) => {
  e.preventDefault();
  if (e.target.checked) {
    const newFarmerCow = {
      cowId: e.target.closest('.card').id,
      farmerUid: e.target.dataset.farmerUid,
    };
    farmerCowData.addFarmerCow(newFarmerCow)
      .then(() => {
        // eslint-disable-next-line no-use-before-define
        buildCows();
        util.printToDom('new-cow', '');
        util.printToDom('single-farmer', '');
      })
      .catch((err) => console.error('could not create farmer cow', err));
  } else {
    const farmerCowId = e.target.id;
    farmerCowData.deleteFarmerCow(farmerCowId)
      .then(() => {
        // eslint-disable-next-line no-use-before-define
        buildCows();
        util.printToDom('new-cow', '');
        util.printToDom('single-farmer', '');
      })
      .catch((err) => console.error('could not delete farmer cow', err));
  }
};

const buildCows = () => {
  smashData.getCowsWithOwners()
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
      $('#show-add-cow-form').click(newCowComponent.showForm);
    })
    .catch((err) => console.error('getCows broke', err));
};

const pastureEvents = () => {
  $('body').on('click', '.delete-cow', removeCow);
  $('body').on('click', '#cow-creator', makeACow);
  $('body').on('click', '.farmer-cow-checkbox', farmerCowController);
};

export default { buildCows, pastureEvents };
