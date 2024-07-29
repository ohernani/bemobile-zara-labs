import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';

import { useFavorites } from './useFavorites';

describe('useFavorites', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should initialize with saved favorites from localStorage', () => {
    localStorage.setItem('favorites', JSON.stringify([1, 2, 3]));
    const { result } = renderHook(() => useFavorites());
    expect(result.current.favorites).toEqual([1, 2, 3]);
  });

  it('should add a favorite correctly', () => {
    const { result } = renderHook(() => useFavorites());
    act(() => {
      result.current.addFavorite(4);
    });

    expect(result.current.favorites).toContain(4);
  });

  it('should not add a duplicate favorite', () => {
    const { result } = renderHook(() => useFavorites());
    act(() => {
      result.current.addFavorite(4);
    });
    act(() => {
      result.current.addFavorite(4);
    });
    expect(result.current.favorites).toEqual([4]);
  });

  it('should remove a favorite correctly', () => {
    const { result } = renderHook(() => useFavorites());
    act(() => {
      result.current.addFavorite(5);
    });
    act(() => {
      result.current.removeFavorite(5);
    });
    expect(result.current.favorites).not.toContain(5);
  });

  it('should update localStorage on add and remove', () => {
    const { result } = renderHook(() => useFavorites());

    act(() => {
      result.current.addFavorite(6);
    });

    expect(JSON.parse(localStorage.getItem('favorites') || '[]')).toContain(6);
    act(() => {
      result.current.removeFavorite(6);
    });
    expect(JSON.parse(localStorage.getItem('favorites') || '[]')).not.toContain(6);
  });
});
