import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyHello from './comp/MyHello';
import MyGreetings from './comp/MyGreetings';
import MyCounter from './comp/MyCounter';
//import UseEffectTest from './comp/UseEffectTest';
import UseMemoTest from './comp/UseMemoTest';
import IfGreeting from './comp/IfGreeting';
import LoginControl from './comp/LoginControl';
import MySummary from './comp/MySummary';
import MyList from './comp/MyList';
import NameForm from './comp/NameForm';
import UseEffectTest from './comp/UseEffectTest';
import UseRefTest from './comp/UseRefTest';
import UseRefTextInput from './comp/UseRefTextInput';
import Calculator from './comp/Calculator';
import NumberGuessGame from './comp/NumberGuessGame';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
    <NumberGuessGame />
  </React.StrictMode>
);//<IfGreeting isLoggedIn ={true} />

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
