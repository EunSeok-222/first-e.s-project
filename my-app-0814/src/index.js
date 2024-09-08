import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NumberGuessGame from './comp/NumberGuessGame';
import WelcomeDialog from './ch13/WelcomeDialog';
import ProfileCard from './ch13/ProfileCard';
import TodoApp from './todo_app/TodoApp';
import YongdonApp from './yongdon_app/YongdonApp';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <YongdonApp/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
