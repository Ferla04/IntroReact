import './App.css';
import CounterApp from './components/CounterApp';
// import PrimeraApp from './components/PrimeraApp';

function App() {
  return (
    <div className="App">
      <CounterApp value={5}/>
      {/* <PrimeraApp saludo='Hola, soy Fer'/> */}
    </div>
  );
}

export default App;
