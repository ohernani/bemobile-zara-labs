import { describe, it, expect, beforeEach, vi } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen, waitFor } from '@testing-library/react';

import { useGetCharacters } from './useGetCharacters';
import MarvelAPI from '../Singleton';

const queryClient = new QueryClient();

vi.mock('../Singleton', () => ({
  default: {
    fetchCharacters: vi.fn(),
  },
}));

const TestComponent = () => {
  const { data, error, isSuccess, isError } = useGetCharacters();

  if (isSuccess) {
    return <div data-testid="data">{JSON.stringify(data)}</div>;
  }

  if (isError) {
    return <div data-testid="error">{error.message}</div>;
  }

  return <div>Loading...</div>;
};

describe('useGetCharacters', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should fetch characters and display data', async () => {
    const mockData = { data: { results: ['character1', 'character2'] } };
    (MarvelAPI.fetchCharacters as jest.Mock).mockResolvedValue(mockData);

    render(
      <QueryClientProvider client={queryClient}>
        <TestComponent />
      </QueryClientProvider>,
    );

    await waitFor(() => expect(screen.getByTestId('data')).toBeInTheDocument());
    expect(screen.getByTestId('data')).toHaveTextContent(JSON.stringify(mockData.data));
  });
});
