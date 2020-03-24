import firebase from 'firebase/app';
import 'firebase/auth';

import pasture from '../../components/pasture/pasture';
import farmHouse from '../../components/farmers/farmers';

const authDiv = $('#auth');
const pastureDiv = $('#pasture');
const farmHouseDiv = $('#farmHouse');
const logOutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
    // person is logged in
      authDiv.addClass('hide');
      pastureDiv.removeClass('hide');
      farmHouseDiv.removeClass('hide');
      logOutButton.removeClass('hide');
      pasture.buildCows();
      farmHouse.buildFarmers();
    } else {
    // person is NOT logged in
      authDiv.removeClass('hide');
      pastureDiv.addClass('hide');
      farmHouseDiv.addClass('hide');
      logOutButton.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
