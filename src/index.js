import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PortfolioPage from './PortfolioPage/Index';
import { Provider } from 'react-redux';
import store from './store';
import ReactGA from 'react-ga';
import { Redirect } from 'react-router-dom';
ReactGA.initialize('UA-198799173-1');

const parsedData = window.location.host.split('.');

if (parsedData.length >= 3) {
  const subDomain = parsedData[0];
  console.log('subdomin', subDomain);
  if (subDomain === 'www') {
    window.location.assign('https://firstletter.tech');
  }
  ReactDOM.render(<PortfolioPage subDomain={subDomain} />, document.getElementById('root'));
} else {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
}

reportWebVitals();

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root'),

// "prestart": "rm ./node_modules/webpack-dev-server/ssl/server.pem && cp -f ./ssl/server.pem ./node_modules/webpack-dev-server/ssl",
//
