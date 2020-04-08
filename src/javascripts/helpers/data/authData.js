import firebase from 'firebase/app';
import 'firebase/auth';

import pasture from '../../components/pasture/pasture';
import farmHouse from '../../components/farmHouse/farmHouse';

const authDiv = $('#auth');
const pastureDiv = $('#pasture');
const farmHouseDiv = $('#farmHouse');
const newCowDiv = $('#new-cow');
const singleFarmerDiv = $('#single-farmer');
const logOutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
    // person is logged in
      authDiv.addClass('hide');
      pastureDiv.removeClass('hide');
      farmHouseDiv.removeClass('hide');
      logOutButton.removeClass('hide');
      singleFarmerDiv.removeClass('hide');
      newCowDiv.removeClass('hide');
      pasture.buildCows();
      farmHouse.buildFarmHouse();
    } else {
    // person is NOT logged in
      authDiv.removeClass('hide');
      pastureDiv.addClass('hide');
      farmHouseDiv.addClass('hide');
      singleFarmerDiv.addClass('hide');
      logOutButton.addClass('hide');
      newCowDiv.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
