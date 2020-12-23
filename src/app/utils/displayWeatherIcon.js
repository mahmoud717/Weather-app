export default (id, state = '') => {
  const iconContainer = document.querySelector('.weather-icon');
  iconContainer.innerHTML = '';
  const icon = document.createElement('i');
  if (state === 'n') {
    state = 'night';
  } else {
    state = 'day';
  }
  icon.className = `wi wi-owm-${state}-${id}`;
  iconContainer.appendChild(icon);
};