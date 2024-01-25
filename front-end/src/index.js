import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx94tPjgdf5DgdrnLJ9y5D3gmw6IEHQMk",
  authDomain: "bloggy-44832.firebaseapp.com",
  projectId: "bloggy-44832",
  storageBucket: "bloggy-44832.appspot.com",
  messagingSenderId: "283786161335",
  appId: "1:283786161335:web:3db4777d7a4ce7965a7132"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


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
