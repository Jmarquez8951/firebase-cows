import utils from '../../helpers/util';

const showForm = () => {
  let domString = '';
  domString += '<h2>New Cow</h2>';
  utils.printToDom('new-cow', domString);
};

export default { showForm };
