
export default (data) => {
  if (!document.querySelector('.show-data')) {
    const showData = document.querySelector('.temperature');
    showData.classList.add('show-data');
    showData.innerText = `${(Math.round(data.main.temp))} °C`;
  } else {
    document.querySelector('.show-data').innerHTML = `${(Math.round(data.main.temp))} °C`;
  }
};

export const displayCityName = (content) => {
  const city = document.querySelector('.city');
  city.innerHTML = content.charAt(0).toUpperCase() + content.slice(1);
};

export const handleError = () => {
  const error = document.createElement('div');
  error.className = 'error';
  error.innerHTML = 'Invalid city name. Please enter A valid one...';
  document.querySelector('.app-container').prepend(error);
};