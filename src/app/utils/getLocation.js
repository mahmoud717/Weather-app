/* eslint-disable no-use-before-define */
// /* eslint-disable  */
import getLocationAsync from './CallAPI';
import parseRequestData, { displayCityName } from './handleAPIData';
import displayWeatherIcon from './displayWeatherIcon';

const city = document.querySelector('.city');

export default () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    city.innerHTML = 'Geolocation is not supported by this browser.';
  }
};

const showPosition = (position) => {
  // Create query for the API.
  const latitude = `latitude=${position.coords.latitude}`;
  const longitude = `&longitude=${position.coords.longitude}`;
  const query = `${latitude + longitude}&localityLanguage=en`;

  let bigDataCloudApi = 'https://api.bigdatacloud.net/data/reverse-geocode-client?';
  bigDataCloudApi += query;

  // Getting city name

  getLocationAsync(bigDataCloudApi)
    .then(
      (data) => {
        // calling the displayCityName function to modify the dom
        displayCityName(data.principalSubdivision);
        return data;
      },
    )
    .then(
      (data) => {
        // getting the temperature by city name generated in the last step
        getLocationAsync(`https://api.openweathermap.org/data/2.5/weather?q=${data.principalSubdivision}&appid=92594fce9e86f115744b4eb9ba617aaa&units=metric`)
          .then((data) => {
            // modifying the dom with the temperature we got.
            parseRequestData(data);

            const state = data.weather[0].icon.split('');
            displayWeatherIcon(data.weather[0].id, state[state.length - 1]);
            document.querySelector('.climate-status').innerHTML = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
          });
      },
    );
};
