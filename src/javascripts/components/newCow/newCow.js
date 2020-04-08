import utils from '../../helpers/util';

const showForm = () => {
  let domString = '';
  domString += '<h2>New Cow</h2>';
  domString += '<form>';
  domString += '<div class="form-group">';
  domString += '<label for="cow-name">Name</label>';
  domString += '<input type="text" class="form-control" id="cow-name">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="cow-breed">Breed:</label>';
  domString += '<input type="text" class="form-control" id="cow-breed">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="cow-location">Location</label>';
  domString += '<input type="text" class="form-control" id="cow-location">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="cow-weight">Weight (lbs)</label>';
  domString += '<input type="text" class="form-control" id="cow-weight">';
  domString += '</div>';
  domString += '<button id="cow-creator" type="submit" class="btn btn-dark">Add Cow</button>';
  domString += '</form>';
  utils.printToDom('new-cow', domString);
};

export default { showForm };
