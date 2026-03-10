import { render, screen } from '@testing-library/react';
import { Card } from '@/components/card';

describe('Card component', () => {
  const props = {
    title: 'Test Product',
    imgUrl: 'https://example.com/image.jpg',
    description: 'This is a test description.',
    alt: 'Test Image',
    link: 'https://amazon.com/test-product',
  };

  it('renders the image with correct src and alt', () => {
    render(<Card {...props} />);
    const img = screen.getByAltText('Test Image') as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain('example.com');
  });

  it('renders the title and description', () => {
    render(<Card {...props} />);
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('This is a test description.')).toBeInTheDocument();
  });

  it('renders the link with correct href and target', () => {
    render(<Card {...props} />);
    const link = screen.getByRole('link', { name: /search on amazon/i }) as HTMLAnchorElement;
    expect(link).toBeInTheDocument();
    expect(link.href).toBe(props.link);
    expect(link.target).toBe('_blank');
    expect(link.rel).toBe('noopener noreferrer');
  });
});