import { Routes, Route } from 'react-router-dom';
import { AppShell } from '@mantine/core';
import { AppNavbar } from './components/ui/Navbar';
import { navigation } from './constants/navigation';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';

const App = () => {
    return (
        <AppShell
            padding="md"
            navbar={<AppNavbar width={{ base: 200 }} p="xs" children={''} />}
            styles={(theme) => ({
                main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
            })}
        >
            <Routes>
                <Route path={navigation.home.path} element={<HomePage />} />
                <Route path={navigation.explore.path} element={<ExplorePage />} />
            </Routes>
        </AppShell>
    );
}

export default App;
