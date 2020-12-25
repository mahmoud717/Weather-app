
import '../assets/style/main.scss';
import '../assets/style/icons/master/weather-icons.min.css';
import getDefaultLocation from './utils/getLocation';
import addEventListener, { tempConvert } from './utils/eventListeners';
import displayDate from './utils/displayDateInfo';

displayDate();
getDefaultLocation();
addEventListener();
tempConvert();