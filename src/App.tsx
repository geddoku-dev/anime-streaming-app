import * as React from 'react';
import { MantineProvider } from '@mantine/core';

const App = () => {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <h2>Anime Streaming App</h2>
        </MantineProvider>
    );
}

export default App;
