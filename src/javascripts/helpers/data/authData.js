import firebase from 'firebase/app';
import 'firebase/auth';

const authDiv = $('#auth');
const pastureDiv = $('#pasture');
const logOutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
    // person is logged in
      authDiv.addClass('hide');
      pastureDiv.removeClass('hide');
      logOutButton.removeClass('hide');
    } else {
    // person is NOT logged in
      authDiv.removeClass('hide');
      pastureDiv.addClass('hide');
      logOutButton.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
