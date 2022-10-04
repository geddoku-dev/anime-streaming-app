import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MantineProvider } from '@mantine/core';

import App from "./App";
import { store } from "./state/store";

const render = document.getElementById("root");
const root = createRoot(render);

root.render(
  <MantineProvider
    theme={{
      colorScheme: 'dark',
    }}
    withGlobalStyles
    withNormalizeCSS
  >
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='*' element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </MantineProvider>
);
