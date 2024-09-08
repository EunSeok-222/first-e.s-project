import logo from './logo.svg';
import './App.css';

export default function App() {
  const name = "홍길동"
  const p = {
    name:"김길동",
    age : 30
  }
  function formatName (person){
    // const s = person.name+"의 나이는1"+ person.age
    const s = `${person.name}의 나이는2${person.age}`
    // const s = <span>{person.name}의 나이는3${person.age}</span>
  
    return '{person.name}의 나이는 {person.age}'
  }
  return (
    <div className="App">
      <h1>Hello React {name}</h1>
      <h2>{p.name}의 나이는 {p.age}</h2>
      <h3>{formatName(p)}</h3>
      <p>{name}</p>
    </div>
  );
}

// export default App; 이걸 funtion 앞에 사용가능 
