import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css';  // This imports the styles.css file
import './index.css';
import App from './App';
import './styles/globals.css';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration'; // Import service worker

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

serviceWorkerRegistration.register();
reportWebVitals();
