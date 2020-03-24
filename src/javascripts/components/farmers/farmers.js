const buildFarmers = (farmer) => {
  let domString = '';
  domString += '<div class="col-3">';
  domString += `<div class="card farmer-card" id="${farmer.id}">`;
  domString += `<div class="card-header">${farmer.name}</div>`;
  domString += '<div class="card-body">';
  domString += `<p class="text-center">Age: ${farmer.age}</p>`;
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  return domString;
};

export default { buildFarmers };
