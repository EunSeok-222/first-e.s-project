import logo from './logo.svg';
import './App.css';       // 한꺼번에 등록


const styles = {          // 객체로 하나씩 반복처리 
  border : '1px solid red',
  borderRadius :16
}

function App() {
  return (
    <div className=".App">
      <h1>헬로 리액트</h1>
    </div>
  );
}

export default App;
