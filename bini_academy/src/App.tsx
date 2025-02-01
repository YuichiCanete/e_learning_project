import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/login';
import '@mantine/core/styles.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { MantineProvider } from '@mantine/core';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <MantineProvider>
          <Router>
            <Routes>
              <Route path="/" element={<LoginPage/>} />
              {/* Add more routes here */}
            </Routes>
          </Router>
        </MantineProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
