import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MantineProvider } from '@mantine/core';

import App from './App';
import { store } from './state/store';

function render() {
  ReactDOM.render(
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<App />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </MantineProvider>, 
    document.body
  );
}

render();