import React from 'react';
import ReactDOM from 'react-dom';
import App from './../src/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './../src/reducers';
import { IntlProvider } from 'react-intl';

const store = createStore(rootReducer);

const messages = {};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <IntlProvider locale="en" messages={messages}>
        <App />
      </IntlProvider>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
