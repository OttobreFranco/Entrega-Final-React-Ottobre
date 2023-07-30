import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkr1Bt8tjTA1s_teD89ssy9dXWMDmWkFc",
  authDomain: "ecommerce-curso-react-b5285.firebaseapp.com",
  projectId: "ecommerce-curso-react-b5285",
  storageBucket: "ecommerce-curso-react-b5285.appspot.com",
  messagingSenderId: "468655711728",
  appId: "1:468655711728:web:dba051fa482e9a2eae6935"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
