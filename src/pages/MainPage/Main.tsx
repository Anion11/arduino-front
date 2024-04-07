import { useState } from 'react';
import style from './styles.module.scss';

const MainPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="inner">
      <p className={style.main__title}>App title</p>
      <p className={style.main__descr}>App description</p>
      <p className={`${style.main__count} text-center`}>App counter: {count}</p>
      <button
        type="button"
        className={style.main__button}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Нажми меня
      </button>
    </div>
  );
};

export default MainPage;
