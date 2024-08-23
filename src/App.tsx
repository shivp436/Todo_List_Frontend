import './styles/styles.scss';
import IMAGE from './assets/logo.png';

const App = () => {
  return (
    <div className='container'>
      <img src={IMAGE} alt='Logo Import' />
      <h1>React TS Starter Template using Webpack</h1>
    </div>
  );
};

export default App;
