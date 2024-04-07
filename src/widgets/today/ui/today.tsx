import style from './today.module.scss';
// eslint-disable-next-line import/prefer-default-export
export const Today = () => (
  <div className={style.today}>
    <div className={style.today__city}>Athens</div>
    <div className={style.today__time}>09:03</div>
    <div className={style.today__date}>Thursday, 31 Aug</div>
  </div>
);
