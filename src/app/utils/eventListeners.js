import { te } from 'date-fns/locale';
import getLocationAsync from './CallAPI';
import parseRequestData, { displayCityName } from './handleAPIData';
import displayWeatherIcon from './displayWeatherIcon';

export default () => {
  const search = document.querySelector('.search');
  search.addEventListener('submit', (e) => {
    e.preventDefault();
    const cityValue = document.querySelector('.search__field').value;
    getLocationAsync(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=92594fce9e86f115744b4eb9ba617aaa&units=metric`)
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

export const tempConvert = () => {
  const temp = document.querySelector('.temperature');
  temp.addEventListener('click', () => {
    if (temp.classList.contains('c')) {
      temp.classList.remove('c');
      temp.classList.add('f');
      let degree = temp.innerText;
      degree = degree.replace(/\D/g, '');
      // eslint-disable-next-line radix
      degree = parseInt(degree);
      temp.innerHTML = `${Math.round((degree * (9 / 5)) + 32)}°F`;
    } else {
      temp.classList.remove('f');
      temp.classList.add('c');
      let degree = temp.innerText;
      degree = degree.replace(/\D/g, '');
      // eslint-disable-next-line radix
      degree = parseInt(degree);
      temp.innerHTML = `${Math.round((degree - 32) * (5 / 9))}°C`;
    }
  });
};
