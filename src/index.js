import React from 'react';
import ReactDOM from 'react-dom';
import { Provider }  from 'react-redux';
import store from './redux/store'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './routes/about/about'
import Login from './routes/login/login';
import Search from './routes/search/search';
import Redux from './routes/redux/redux'
import './style.css';
import App from './app';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="search" element={<Search />} />
      <Route path="login" element={<Login />} />
      <Route path="redux" element={<Redux />} />
    </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
