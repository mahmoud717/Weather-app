import getLocationAsync from './CallAPI';
import parseRequestData, { displayCityName } from './handleAPIData';
import displayWeatherIcon from './displayWeatherIcon';

export default () => {
  const search = document.querySelector('.search');
  search.addEventListener('submit', (e) => {
    e.preventDefault();
    const cityValue = document.querySelector('.search__field').value;
    getLocationAsync(`http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=92594fce9e86f115744b4eb9ba617aaa&units=metric`)
      .then((data) => {
        // modifying the dom with the temperature we got.
        parseRequestData(data);
        // display the city name
        displayCityName(cityValue);
        // display the weather icon
        const state = data.weather[0].icon.split('');
        displayWeatherIcon(data.weather[0].id, state[state.length - 1]);
        // update weather condition
        document.querySelector('.climate-status').innerHTML = data.weather[0].description;
        // remove the error if existed
        if (state[state.length - 1] === 'n') {
          document.querySelector('body').className = 'night';
        } else {
          document.querySelector('body').className = 'day';
        }

        if (document.querySelector('.error')) {
          document.querySelector('.error').remove();
        }
      });
  });
};