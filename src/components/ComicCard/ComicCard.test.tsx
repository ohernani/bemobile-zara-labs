import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { ComicCard } from './ComicCard';

const props = {
  imgUrl: 'https://example.com/image.jpg',
  title: 'Test Comic',
  year: '2022',
};

describe('ComicCard', () => {
  it('renders the comic card with the correct image, title, and year', () => {
    render(<ComicCard {...props} />);

    expect(screen.getByAltText(`${props.title}_comic`)).toHaveAttribute('src', props.imgUrl);

    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.year)).toBeInTheDocument();
  });
});
