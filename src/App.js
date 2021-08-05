import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';
import Routes from './Routes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      retry: false
    },
  },
});

const theme = createTheme();

/**
 * Renders the Main Application view
 */
const App = () => (
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes />
      </Router>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
