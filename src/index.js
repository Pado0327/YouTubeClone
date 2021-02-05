import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Youtube from './components/service/youtube.js';
import App from './app.jsx';

const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById('root')
);
