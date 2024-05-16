import classNames from 'classnames';
import style from './HourlyForecastColumn.module.scss';
import CloudyWeather from '../assets/cloudy-weather.png';
import Direction from '../assets/direction.png';

const HourlyForecastColumn = ({ isDay }: { isDay: boolean }) => {
  const className = classNames(style.HourlyForecastColumn, {
    [style.day]: isDay,
    [style.night]: !isDay,
  });

  return (
    <div className={className}>
      <div className={style.HourlyForecastColumn__time}>12:00</div>
      <div className={style.HourlyForecastColumn__weatherIcon}>
        <img src={CloudyWeather} alt="" />
      </div>
      <div className={style.HourlyForecastColumn__temp}>26°C</div>
      <div className={style.HourlyForecastColumn__image}>
        <img src={Direction} alt="" />
      </div>
      <div className={style.HourlyForecastColumn__speed}>3km/h</div>
    </div>
  );
};

export default HourlyForecastColumn;
