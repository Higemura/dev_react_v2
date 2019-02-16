import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'rudex';
import { Provider } from 'react-rudex';
import './index.css';
import reducer from './reducers';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
