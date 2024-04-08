import style from './styles.module.scss';
import SwitcherTheme from '../../shared/switcherTheme';
import { Today } from '../../widgets/today';
import { Prediction } from '../../widgets/prediction';
import { HourlyForecast } from '../../widgets/HourlyForecast';

const MainPage = () => (
  <div>
    <div className="inner">
      <section className="section">
        <SwitcherTheme />
      </section>
      <section className="section">
        <div className={style.main__wrapper}>
          <Today />
          <div>Блок 2</div>
        </div>
      </section>
      <section className="section">
        <div className={style.main__wrapper}>
          <Prediction />
          <HourlyForecast />
        </div>
      </section>
    </div>
  </div>
);

export default MainPage;
