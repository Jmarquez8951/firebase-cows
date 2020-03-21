import firebase from 'firebase/app';
import 'firebase/auth';

const logOutEvent = () => {
  $('#navbar-logout-button').click((e) => {
    e.preventDefault();
    firebase.auth().signOut();
  });
};

export default { logOutEvent };
