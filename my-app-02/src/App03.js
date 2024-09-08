import logo from './logo.svg';
import './App.css';
import Book from './ch03/Book';
import Library from './ch03/Library';
import Clock from './ch04/CLock';

export default function App() {
  return (
    <div className="App">
      <Book />
      <Library />

    </div>
  );
}

// export default App; 이걸 funtion 앞에 사용가능 
