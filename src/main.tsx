import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { FavoriteProvider } from './providers/FavoritesContext.tsx';
import { App } from './App.tsx';

import './styles/styles.scss';
import './index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <FavoriteProvider>
        <App />
      </FavoriteProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
