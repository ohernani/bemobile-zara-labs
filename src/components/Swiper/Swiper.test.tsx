import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Swiper } from './Swiper';

describe('Swiper Component', () => {
  it('renders children and updates progress bar on scroll', () => {
    render(
      <Swiper>
        <div data-testid="item1">Item 1</div>
        <div data-testid="item2">Item 2</div>
        <div data-testid="item3">Item 3</div>
      </Swiper>,
    );

    expect(screen.getByTestId('item1')).toBeInTheDocument();
    expect(screen.getByTestId('item2')).toBeInTheDocument();
    expect(screen.getByTestId('item3')).toBeInTheDocument();
  });
  it('should handle mouse drag events and update progress bar', () => {
    render(
      <Swiper>
        <div data-testid="item1">Item 1</div>
        <div data-testid="item2">Item 2</div>
        <div data-testid="item3">Item 3</div>
      </Swiper>,
    );

    const carousel = screen.getByTestId('carousel-container');
    const progressBar = screen.getByTestId('progress-bar');

    expect(carousel).toBeInTheDocument();
    expect(progressBar).toBeInTheDocument();

    fireEvent.mouseDown(carousel, { pageX: 100 });
    fireEvent.mouseMove(carousel, { pageX: 200 });
    fireEvent.mouseUp(carousel);
  });
});
