import util from '../../helpers/util';
import cowData from '../../helpers/data/cowData';

const showForm = (cowId) => {
  cowData.getSingleCow(cowId)
    .then((resp) => {
      const cow = resp.data;
      let domString = '';
      domString += '<h2>Edit Cow</h2>';
      domString += `<form class="col-10 offset-1 edit-cow-form-tag" id="${cowId}">`;
      domString += '<div class="form-group">';
      domString += '<label for="cow-name">Name</label>';
      domString += `<input type="text" class="form-control" id="edit-cow-name" value="${cow.name}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="cow-breed">Breed:</label>';
      domString += `<input type="text" class="form-control" id="edit-cow-breed" value="${cow.breed}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="cow-location">Location</label>';
      domString += `<input type="text" class="form-control" id="edit-cow-location" value="${cow.location}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="cow-weight">Weight (lbs)</label>';
      domString += `<input type="text" class="form-control" id="edit-cow-weight" value="${cow.weight}">`;
      domString += '</div>';
      domString += '<button id="cow-modifier" type="submit" class="btn btn-dark">Edit Cow</button>';
      domString += '</form>';
      util.printToDom('edit-cow', domString);
    })
    .catch((err) => console.error(err));
};

export default { showForm };
