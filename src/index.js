import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import AppRoute from './AppRoute';
// import UseStateHook from './UseStateHook';
// import PracticeSecMohit from './components/APIShow/PracticeSecMohit';
import WorkFlow from './components/WorkFlow/WorkFlow';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AppRoute /> */}
    {/* <UseStateHook /> */}
    {/* <PracticeSecMohit /> */}
    <WorkFlow />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
