import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Clock from './ch04/Clock';
import App from './App';
import Counter from './ch07/Counter';



const root = ReactDOM.createRoot(document.getElementById('root'));
  setInterval(function() {
    root.render(
      <React.StrictMode>
        <Counter />
      </React.StrictMode>
    );
  },1000);
  
  
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
