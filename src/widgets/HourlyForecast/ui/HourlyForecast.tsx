import HourlyForecastColumn from '../../../shared/HourlyForecastColumn';
import style from './HourlyForecast.module.scss';

// eslint-disable-next-line import/prefer-default-export
export const HourlyForecast = () => (
  <div className={style.HourlyForecast}>
    <div className={style.HourlyForecast__title}>Hourly Forecast:</div>
    <div className={style.HourlyForecast__content}>
      <HourlyForecastColumn isDay />
      <HourlyForecastColumn isDay />
      <HourlyForecastColumn isDay />
      <HourlyForecastColumn isDay={false} />
      <HourlyForecastColumn isDay={false} />
    </div>
  </div>
);
