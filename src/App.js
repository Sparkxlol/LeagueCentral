import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Greet name='Owen'>
        <p>This is a website</p>
      </Greet>
      <Greet name='Mo' />
      <Hello />
    </div>
  );
}

export default App;
