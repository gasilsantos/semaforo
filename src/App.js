import './App.css';
import TrafficLight from './components/TrafficLight';

function App() {
  return (
    <div className="App">
      <TrafficLight initialValue={0} />
      <TrafficLight initialValue={1} />
      
    </div>
  );
}

export default App;
