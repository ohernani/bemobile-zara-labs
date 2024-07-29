import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { FavoriteProvider } from './providers/FavoritesContext';
import { App } from './App';
import './styles/styles.scss';
import './index.css';

const createRootMock = vi.fn(() => ({
  render: vi.fn(),
}));
vi.mock('react-dom/client', () => ({
  createRoot: createRootMock,
}));

describe('main.tsx', () => {
  it('renders the App component with QueryClientProvider and FavoriteProvider', () => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: false,
        },
      },
    });

    render(
      <QueryClientProvider client={queryClient}>
        <FavoriteProvider>
          <App />
        </FavoriteProvider>
      </QueryClientProvider>,
    );

    expect(screen.getByAltText('marvel_logo')).toBeInTheDocument();
  });
});
