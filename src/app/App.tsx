import { useState } from 'react';
import style from './styles/style.module.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={style.app}>
      <header>
        <div className={style.inner}>header</div>
      </header>
      <main>
        <div className={style.inner}>
          <p className={style.app__title}>App title</p>
          <p className={style.app__descr}>App description</p>
          <p className={style.app__count}>App counter: {count}</p>
          <button
            type="button"
            className={style.app__button}
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Нажми меня
          </button>
        </div>
      </main>
      <footer>
        <div className={style.inner}>footer</div>
      </footer>
    </div>
  );
}

export default App;
