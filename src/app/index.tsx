import './styles/style.scss';
import AppRouter from './router/router';

const App = () => (
  <div className="app">
    <header>header</header>
    <main>
      <AppRouter />
    </main>
    <footer>footer</footer>
  </div>
);

export default App;
