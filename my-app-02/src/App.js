import logo from './logo.svg';
import './App.css';
import Counter from './ch07/Counter';
import MyTimer from './ch07/MyTimer';
import Toggle from './ch08/Toggle';

export default function App() {
  return (
    <div className="App">
      <Counter />
      <MyTimer />
      <Toggle />

    </div>
  );
}

// export default App; 이걸 funtion 앞에 사용가능 
